import styles from './app.module.scss';
import { Route, Routes } from 'react-router-dom';
import {
  HeaderComponent,
  SideBarComponent,
  TitleComponent,
} from '@share-price-platform/components';
import { SharesTable, ShareDetail } from './views';

import { faTable } from '@fortawesome/free-solid-svg-icons';

export function App() {
  const menuItems = [{ label: 'Shares Table', icon: faTable, path: '/' }];

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
          <Route path="/" element={<SharesTable />} />
          <Route path="/time-series/:ticker" element={<ShareDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
