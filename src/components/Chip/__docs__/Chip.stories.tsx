import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Chip',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    children: 'Chip',
    isDismissible: false,
    isToggleable: false,
  },
};

export const Dismissible: Story = {
  args: {
    children: 'Chip',
    isDismissible: true,
    isToggleable: false,
  },
};

export const Toggleable: Story = {
  args: {
    children: 'Chip',
    isDismissible: false,
    isToggleable: true,
  },
};
