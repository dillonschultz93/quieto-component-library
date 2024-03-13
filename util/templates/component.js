import kebabCase from '../stringToKebab.js';

const component = componentName => ({
  content: `import './${componentName}.css';

export type ${componentName}Props = {};

const ${componentName}: React.FC<${componentName}Props> = ({}) => {
  return (
    <div className="${componentName}" data-testid="${kebabCase(componentName)}">
      This is the ${componentName} component.
    </div>
  );
};

export default ${componentName};
`,
  fileName: `${componentName}`,
  extension: 'tsx',
});

export default component;
