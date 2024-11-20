import { render, screen } from '@testing-library/react';
import JsonEditor from '../components/JsonEditor';

test('renders JSON editor', () => {
  render(<JsonEditor onChange={() => {}} />);
  const textareaElement = screen.getByRole('textbox');
  expect(textareaElement).toBeInTheDocument();
});