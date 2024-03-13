import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Chip',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Chip: Story = {
  args: {
    children: 'Chip',
    isDismissable: true,
  },
};
