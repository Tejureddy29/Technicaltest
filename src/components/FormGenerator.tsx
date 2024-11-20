// src/components/FormGenerator.tsx

import React from 'react';
import { useForm } from 'react-hook-form';
import FormField from './FormField';

interface Field {
  id: string;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<{ value: string; label: string }>;
  validation?: {
    pattern?: string;
    message?: string; // This can be undefined
  };
}

interface FormGeneratorProps {
  formData: {
    formTitle: string;
    formDescription: string;
    fields: Field[];
  };
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ formData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert('Form submitted successfully!');
    
    // Download form data as JSON
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'form-submission.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2))
      .then(() => alert('Form JSON copied to clipboard!'))
      .catch(err => console.error('Error copying text: ', err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">{formData.formTitle}</h2>
      <p className="text-gray-600 mb-4 dark:text-gray-400">{formData.formDescription}</p>

      <button 
        type="button" 
        onClick={copyToClipboard} 
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 mb-4"
      >
        Copy Form JSON
      </button>

      {formData.fields.map(field => (
        <FormField
          key={field.id}
          field={field}
          register={register}
          errors={errors}
        />
      ))}
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Submit</button>
    </form>
  );
};

export default FormGenerator;