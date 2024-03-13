const componentIndex = componentName => ({
  content: `export { default as ${componentName} } from './${componentName}';
`,
  fileName: 'index',
  extension: 'ts',
});

export default componentIndex;
