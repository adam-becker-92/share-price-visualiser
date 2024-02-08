import styles from './share-detail.module.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  TitleComponent,
  ShareBreakdownComponent,
} from '@share-price-platform/components';

interface IShareBreakdown {
  id: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
  volume: number;
}

export function ShareDetail() {
  const { ticker } = useParams();
  const [data, setData] = useState<IShareBreakdown>({} as IShareBreakdown);
  useEffect(() => {
    async function getData() {
      const response = await fetch(`http://localhost:3000/shares/${ticker}`);
      const { data } = await response.json();
      setData(data);
    }

    try {
      getData();
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
      {data?.id && <ShareBreakdownComponent {...data} />}
    </div>
  );
}

export default ShareDetail;
