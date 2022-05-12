import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const result = render(<App />);
  const elements = result.queryByText('Loaded');
  expect(elements).toBeTruthy(); 
});
