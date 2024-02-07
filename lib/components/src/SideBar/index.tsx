import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface IMenuItem {
  icon: IconDefinition;
  path: string;
  label: string;
}

interface ISideBar {
  menuItems: Array<IMenuItem>;
}

const MenuItem = ({ icon, path, label }: IMenuItem): JSX.Element => {
  return (
    <section className={styles['sidebar-item']}>
      <Link to={path}>
        <FontAwesomeIcon className={styles['sidebar-item__icon']} icon={icon} />
        <p className={styles['sidebar-item__label']}>{label}</p>
      </Link>
    </section>
  );
};

export function SideBarComponent({ menuItems }: ISideBar) {
  return (
    <aside className={styles['sidebar']}>
      {menuItems.map((props) => (
        <MenuItem key={props.path} {...props} />
      ))}
    </aside>
  );
}
