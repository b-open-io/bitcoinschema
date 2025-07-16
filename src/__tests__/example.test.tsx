/// <reference path="./setup-env.ts" />
import { expect, test } from 'bun:test';
import { render, screen } from '@testing-library/react';
import React from 'react';

const TestComponent = () => <div>Hello World</div>;

test('component renders', () => {
  render(<TestComponent />);
  expect(screen.getByText('Hello World')).toBeDefined();
});
