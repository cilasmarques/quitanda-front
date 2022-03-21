import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { describe, test, expect } from 'vitest'
import ButtonWrapper  from './Button.jsx';

describe("Button component", async () => {
  test("Button component should be defined", () => {
    render(<ButtonWrapper />);

    expect(ButtonWrapper).toBeDefined();
  });
})