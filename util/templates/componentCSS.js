import kebabCase from '../stringToKebab.js';

const componentCSS = componentName => ({
  content: `@import '../../styles/base.css';

.${kebabCase(componentName)} {
  /* Add your styles here */
  display: block;
  border: 1px solid red;
}
`,
  fileName: `${componentName}`,
  extension: 'css',
});

export default componentCSS;
