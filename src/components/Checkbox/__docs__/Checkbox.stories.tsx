import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Checkbox',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Checkbox: Story = {
  args: {
    label: 'Checkbox',
    checked: false,
    value: 'value',
    onChange: () => console.log('Checkbox clicked'),
  },
};
