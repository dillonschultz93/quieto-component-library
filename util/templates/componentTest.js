import kebabCase from '../stringToKebab.js';

const componentTest = componentName => ({
  content: `import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import ${componentName} from '../${componentName}';

describe('${componentName} component', () => {
  it('Should render the ${componentName} component', () => {
    render(<${componentName} />);
    const testElement = screen.getByTestId('${kebabCase(componentName)}');

    expect(testElement).toBeInTheDocument();
  });
});
`,
  fileName: `${componentName}.test`,
  extension: 'tsx',
});

export default componentTest;
