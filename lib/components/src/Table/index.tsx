import styles from './index.module.scss';
import 'ag-grid-community/styles/ag-grid.css'; // Core CSS
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Theme
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic

interface ITableComponent {
  data: Array<{
    id: string;
    name: string;
    price: number;
    change: number;
    percentChange: string;
    volume: number;
  }>;
  colDefs: any;
}

export function TableComponent({ data, colDefs }: ITableComponent) {
  return (
    <div className={`ag-theme-quartz ${styles['table']}`}>
      <AgGridReact rowData={data} columnDefs={colDefs} />
    </div>
  );
}
