const componentExample = componentName => ({
  content: `import React, { FC } from 'react';
import ${componentName}, { ${componentName}Props } from '../${componentName}';

const Example: FC<${componentName}Props> = ({}) => {
  return <${componentName} />;
};

export default Example;
`,
  fileName: 'Example',
  extension: 'tsx',
});

export default componentExample;
