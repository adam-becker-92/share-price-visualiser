import styles from './app.module.scss';
import { Route, Routes, Link } from 'react-router-dom';
import {
  HeaderComponent,
  SideBarComponent,
} from '@share-price-platform/components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLineChart,
  faTable,
} from '@fortawesome/free-solid-svg-icons';

export function App() {
  const menuItems = [
    { label: 'Shares Table', icon: faTable, slug: '/' },
    { label: 'Shares Time Series', icon: faLineChart, slug: '/time-series' },
  ];

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <HeaderComponent />
      </div>
      <div className={styles['sidebar']}>
        <SideBarComponent menuItems={menuItems} />
      </div>
      <div className={styles['main']}>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                This is the generated root route.
                <Link to="/page-2">Click here for page 2.</Link>
              </div>
            }
          />
          <Route
            path="/time-series"
            element={
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
                <Link to="/">Click here to go back to root page.</Link>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
