import styles from './share-detail.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  TitleComponent,
  ShareBreakdownComponent,
} from '@share-price-platform/components';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IShareBreakdown {
  id: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
  volume: number;
}

interface IShareTimeSeries {
  yAxisLabels: Array<string>;
  data: Array<number>;
}

interface IRawTimeSeries {
  price: number;
  date: string;
}

interface IFormattedTimeSeries {
  yAxisLabels: Array<string>;
  data: Array<number>;
}

export function ShareDetail() {
  const { ticker } = useParams();
  const [shareData, setShareData] = useState<IShareBreakdown>(
    {} as IShareBreakdown
  );
  const [shareTimeSeries, setShareTimeSeries] = useState<IShareTimeSeries>(
    {} as IShareTimeSeries
  );

  useEffect(() => {
    async function getShareDetails() {
      const response = await fetch(`http://localhost:3000/shares/${ticker}`);
      const { data } = await response.json();
      setShareData(data);

      const formattedData = data?.timeSeries?.reduce(
        (returnObj: IFormattedTimeSeries, { price, date }: IRawTimeSeries) => {
          return {
            yAxisLabels: returnObj.yAxisLabels.concat(format(date, 'P')),
            data: returnObj.data.concat(price),
          };
        },
        {
          yAxisLabels: [],
          data: [],
        }
      );

      setShareTimeSeries(formattedData);
    }

    try {
      getShareDetails();
    } catch (err) {
      console.error(err);
    }
  }, [ticker]);

  return (
    <div className={styles['container']}>
      <TitleComponent
        title="Share Breakdown"
        subTitle="Breakdown of share and perfromance over time"
      />
      {shareData?.id && <ShareBreakdownComponent {...shareData} />}
      <div className={styles['graph']}>
        {shareTimeSeries?.data && (
          <Line
            data={{
              labels: shareTimeSeries?.yAxisLabels,
              datasets: [
                {
                  label: `${ticker} Average Share Price ($)`,
                  data: shareTimeSeries?.data,
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.5,
                },
              ],
            }}
          />
        )}
      </div>
    </div>
  );
}

export default ShareDetail;
