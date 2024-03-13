const componentStory = componentName => ({
  content: `import type { Meta, StoryObj } from '@storybook/react';
import Example from './Example';

const meta: Meta<typeof Example> = {
  title: '${componentName}',
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const ${componentName}: Story = {
  args: {},
};
`,
  fileName: `${componentName}.stories`,
  extension: 'tsx',
});

export default componentStory;
