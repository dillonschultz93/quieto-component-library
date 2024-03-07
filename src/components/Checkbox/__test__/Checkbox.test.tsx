import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Checkbox from '../Checkbox';

describe('Checkbox component', () => {
  it('Should render the checkbox component', () => {
    render(
      <Checkbox
        label="Checkbox Label"
        value="checkbox"
        checked={false}
        onChange={() => {}}
      />
    );
    const checkbox = screen.getByTestId('checkbox');

    expect(checkbox).toBeInTheDocument();
  });
});
