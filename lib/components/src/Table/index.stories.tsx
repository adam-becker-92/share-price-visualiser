import type { Meta, StoryObj } from '@storybook/react';
import { TableComponent } from '.';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TableComponent> = {
  component: TableComponent,
  title: 'Components',
};
export default meta;
type Story = StoryObj<typeof TableComponent>;

export const Table: Story = {
  args: {
    data: [
      {
        id: 'APPL',
        name: 'Apple',
        price: 54.96,
        change: -0.27,
        percentChange: '-0.49',
        volume: 51869206.44,
      },
      {
        id: 'MSFT',
        name: 'Microsoft',
        price: 12.04,
        change: 1.79,
        percentChange: '14.87',
        volume: 41012233.73,
      },
      {
        id: 'AMZN',
        name: 'Amazon',
        price: 41.82,
        change: -0.93,
        percentChange: '-2.22',
        volume: 95791099.72,
      },
    ],
    colDefs: [
      { field: 'id', headerName: 'Ticker' },
      { field: 'name', headerName: 'Name' },
      { field: 'price', headerName: 'Price' },
      { field: 'change', headerName: 'Price Change' },
      { field: 'percentChange', headerName: 'Percent Change' },
      { field: 'volume', headerName: 'Volume' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Mock Share Visualiser/gi)).toBeTruthy();
  },
};
