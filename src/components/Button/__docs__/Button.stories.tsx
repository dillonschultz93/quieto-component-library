import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: 'Button',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    size: 'large',
    kind: 'primary',
    hasIcon: true,
    icon: 'check',
    disabled: false,
    children: 'Primary',
    onClick: () => console.log('Primary button clicked'),
  },
};

export const Neutral: Story = {
  args: {
    size: 'large',
    kind: 'neutral',
    hasIcon: true,
    icon: 'check',
    disabled: false,
    children: 'Neutral',
    onClick: () => console.log('Neutral button clicked'),
  },
};

export const Ghost: Story = {
  args: {
    size: 'large',
    kind: 'ghost',
    hasIcon: true,
    icon: 'check',
    disabled: false,
    children: 'Ghost',
    onClick: () => console.log('Ghost button clicked'),
  },
};
