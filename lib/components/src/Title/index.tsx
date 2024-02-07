import styles from './index.module.scss';

interface ITitle {
  title: string;
  subTitle?: string;
}

export function TitleComponent({ title, subTitle }: ITitle) {
  return (
    <div className={styles['title']}>
      <h1 className={styles['title__text']}>{title}</h1>
      {subTitle && <h2 className={styles['title__sub-title']}>{subTitle}</h2>}
    </div>
  );
}
