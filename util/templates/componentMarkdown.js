const componentMarkdown = componentName => ({
  content: `import { Canvas, Meta } from '@storybook/blocks';
import Example from './Example.tsx';
import * as ${componentName} from './${componentName}.stories.tsx';

<Meta of={${componentName}} title="${componentName}" />

# ${componentName}

This is where you will describe the ${componentName} component.

#### Example

<Canvas  of={${componentName}.${componentName}}/>

## Usage
\`\`\`tsx
import { ${componentName} } from '@quieto/components';

const App = () => {
  return <${componentName} />
};

export default App;

\`\`\`

#### Props
- \`propName\` - Description of prop
`,
  fileName: `${componentName}`,
  extension: 'mdx',
});

export default componentMarkdown;
