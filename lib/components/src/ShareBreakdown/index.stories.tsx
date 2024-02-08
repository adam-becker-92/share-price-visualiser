import type { Meta, StoryObj } from '@storybook/react';
import { ShareBreakdownComponent } from '.';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ShareBreakdownComponent> = {
  component: ShareBreakdownComponent,
  title: 'Components',
};
export default meta;
type Story = StoryObj<typeof ShareBreakdownComponent>;

export const ShareBreakdown: Story = {
  args: {
    id: 'APPL',
    name: 'Apple Inc',
    price: 102.0,
    change: 2.0,
    percentChange: 2.0,
    volume: 100000,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Mock Share Visualiser/gi)).toBeTruthy();
  },
};
