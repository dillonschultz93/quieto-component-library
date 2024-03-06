import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Icon from '../Icon';

describe('Icon component', () => {
  it('Should render the icon component', () => {
    render(<Icon size="16" name="airplay" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });
});
