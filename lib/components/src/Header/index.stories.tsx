import type { Meta, StoryObj } from '@storybook/react';
import { HeaderComponent } from '.';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof HeaderComponent> = {
  component: HeaderComponent,
  title: 'Components',
};
export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Mock Share Visualiser/gi)).toBeTruthy();
  },
};
