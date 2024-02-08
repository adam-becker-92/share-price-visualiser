import styles from './index.module.scss';

interface IShareBreakdown {
  id: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
  volume: number;
}

export function ShareBreakdownComponent({
  id,
  name,
  price,
  change,
  percentChange,
  volume,
}: IShareBreakdown) {
  return (
    <div className={styles['breakdown']}>
      <h3 className={styles['breakdown__name']}>{name}</h3>
      <h4 className={styles['breakdown__ticker']}>{id}</h4>
      <div className={styles['breakdown__metrics']}>
        <p>
          Price: <strong>${price}</strong>
        </p>
        <p>
          Price Change: <strong>${change}</strong>
        </p>
        <p>
          Percent Change: <strong>{percentChange}%</strong>
        </p>
        <p>
          Volume: <strong>${volume}</strong>
        </p>
      </div>
    </div>
  );
}
