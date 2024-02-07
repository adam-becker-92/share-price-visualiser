import styles from './app.module.scss';
import { Route, Routes, Link } from 'react-router-dom';
import {
  HeaderComponent,
  SideBarComponent,
  TitleComponent,
} from '@share-price-platform/components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLineChart,
  faTable,
} from '@fortawesome/free-solid-svg-icons';

export function App() {
  const menuItems = [
    { label: 'Shares Table', icon: faTable, path: '/' },
    { label: 'Shares Time Series', icon: faLineChart, path: '/time-series' },
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
                <TitleComponent
                  title="Shares Table"
                  subTitle="Table that provides a breakdown of metrics for a selection of different shares"
                />
              </div>
            }
          />
          <Route
            path="/time-series"
            element={
              <div>
                <TitleComponent
                  title="Shares Time Series"
                  subTitle="Breakdown of share perfromance over time"
                />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
