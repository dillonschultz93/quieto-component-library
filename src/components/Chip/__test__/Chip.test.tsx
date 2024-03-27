import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Chip from '../Chip';

describe('Chip component', () => {
  it('Should render the Chip component', () => {
    render(<Chip />);
    const testElement = screen.getByTestId('chip');

    expect(testElement).toBeInTheDocument();
  });
});
