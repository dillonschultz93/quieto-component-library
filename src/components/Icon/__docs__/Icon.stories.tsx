import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Icon',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Icon: Story = {
  args: {
    size: 24,
    name: 'airplay',
  },
};
