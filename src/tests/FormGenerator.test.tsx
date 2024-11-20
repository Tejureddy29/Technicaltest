// src/tests/FormGenerator.test.tsx

import { render, screen } from '@testing-library/react';
import FormGenerator from '../components/FormGenerator';

test('renders form fields based on schema', () => {
  const formData = {
    formTitle: "Project Requirements Survey",
    formDescription: "Please fill out this survey about your project needs",
    fields: [
      {
        id: "name",
        type: "text",
        label: "Full Name",
        required: true,
        placeholder: "Enter your full name"
      },
      {
        id: "email",
        type: "email",
        label: "Email Address",
        required: true,
        placeholder: "you@example.com",
        validation: {
          pattern:"^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
          message:"Please enter a valid email address"
        }
      },
    ]
  };

  render(<FormGenerator formData={formData} />);
  
  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
});