import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Hello } from '../components/Hello';

describe('test', () => {
  it('true', () => {
    const { getByText } = render(<Hello compiler='TypeScript' framework='React' />);

    expect(getByText('Hello from TypeScript and React!')).toBeInTheDocument();
  });
});
