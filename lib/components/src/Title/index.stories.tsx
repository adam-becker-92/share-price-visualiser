import type { Meta, StoryObj } from '@storybook/react';
import { TitleComponent } from '.';
import {
  faTable,
  faLineChart,
  faPieChart,
} from '@fortawesome/free-solid-svg-icons';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof TitleComponent> = {
  component: TitleComponent,
  title: 'Components',
};
export default meta;
type Story = StoryObj<typeof TitleComponent>;

export const Title: Story = {
  args: {
    title: 'Time Series',
    subTitle:
      'Interface that breaks down performance of metrics over a specified amount of time',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Mock Share Visualiser/gi)).toBeTruthy();
  },
};
