import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
  it('Should render the button component', () => {
    render(<Button>Button Label</Button>);
    const button = screen.getByTestId('button');

    expect(button).toBeInTheDocument();
  });
});
