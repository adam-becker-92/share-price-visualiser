import styles from './index.module.scss';

interface IHeaderProps {
  text: string;
}

export function HeaderComponent({
  text = 'Mock Share Visualiser',
}: IHeaderProps) {
  return (
    <header className={styles['header']}>
      <p className={styles['header__text']}>{text}</p>
    </header>
  );
}
