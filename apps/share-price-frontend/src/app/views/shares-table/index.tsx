import { useEffect, useMemo, useState } from 'react';
import styles from './shares-table.module.scss';
import {
  TitleComponent,
  TableComponent,
} from '@share-price-platform/components';
import { Link } from 'react-router-dom';

const Title = () =>
  useMemo(
    () => (
      <TitleComponent
        title="Shares Table"
        subTitle="Table that provides a breakdown of metrics for a selection of different shares"
      />
    ),
    []
  );

export function SharesTable() {
  const [data, setData] = useState([]);
  const colDefa = useMemo(
    () => [
      {
        field: 'id',
        headerName: 'Ticker',
        cellRenderer: ({ value }: { value: string }) => {
          return <Link to={`/time-series/${value}`}>{value}</Link>;
        },
      },
      { field: 'name', headerName: 'Name' },
      { field: 'price', headerName: 'Price' },
      { field: 'change', headerName: 'Price Change' },
      { field: 'percentChange', headerName: 'Percent Change' },
      { field: 'volume', headerName: 'Volume' },
    ],
    []
  );
  useEffect(() => {
    async function getData() {
      const response = await fetch('http://localhost:3000/shares', {
        method: 'get',
        headers: {
          'Access-Control-Allow-Origin': 'true',
        },
      });
      const { data } = await response.json();
      setData(data);
    }

    try {
      getData();
    } catch (err) {
      console.error('unable to fetch share data', err);
    }
  }, []);

  if (data.length === 0) {
    <div className={styles['container']}>
      <Title />
    </div>;
  }
  return (
    <div className={styles['container']}>
      <Title />
      {data.length && <TableComponent data={data} colDefs={colDefa} />}
    </div>
  );
}

export default SharesTable;
