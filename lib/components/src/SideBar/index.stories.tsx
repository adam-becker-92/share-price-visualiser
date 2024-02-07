import type { Meta, StoryObj } from '@storybook/react';
import { SideBarComponent } from '.';
import {
  faTable,
  faLineChart,
  faPieChart,
} from '@fortawesome/free-solid-svg-icons';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const meta: Meta<typeof SideBarComponent> = {
  component: SideBarComponent,
  title: 'Components',
};
export default meta;
type Story = StoryObj<typeof SideBarComponent>;

export const SideBar: Story = {
  args: {
    menuItems: [
      { label: 'Menu Item One', icon: faTable, path: '/' },
      { label: 'Menu Item Two', icon: faLineChart, path: '/link-2' },
      { label: 'Menu Item Three', icon: faPieChart, path: '/link-3' },
    ],
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
        <Routes>
          <Route path="/" element={<div>page 1</div>} />
          <Route path="/link-2" element={<div>page 2</div>} />
          <Route path="/link-3" element={<div>page 3</div>} />
        </Routes>
      </BrowserRouter>
    ),
  ],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Mock Share Visualiser/gi)).toBeTruthy();
  },
};
