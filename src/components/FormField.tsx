// src/components/FormField.tsx

import React from 'react';
import { FieldValues, UseFormRegister, RegisterOptions } from 'react-hook-form';

interface Option {
  value: string;
  label: string;
}

interface FormFieldProps {
  field: {
    id: string;
    type: string;
    label: string;
    required?: boolean;
    placeholder?: string;
    options?: Option[];
    validation?: {
      pattern?: string;
      message?: string; // This can be undefined
    };
  };
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const FormField: React.FC<FormFieldProps> = ({ field, register, errors }) => {
  // Define validation rules
  const validationRules: RegisterOptions = {};

  if (field.required) {
    validationRules.required = `${field.label} is required`;
  }

  if (field.validation?.pattern) {
    validationRules.pattern = {
      value: new RegExp(field.validation.pattern),
      message: field.validation.message || 'Invalid format',
    };
  }

  switch (field.type) {
    case 'text':
    case 'email':
    case 'textarea':
      return (
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              {...register(field.id, validationRules)}
              placeholder={field.placeholder}
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
            />
          ) : (
            <input
              {...register(field.id, validationRules)}
              type={field.type}
              placeholder={field.placeholder}
              className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
            />
          )}
          {errors[field.id] && (
            <span className="text-red-500">{errors[field.id].message}</span>
          )}
        </div>
      );

    case 'select':
      return (
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{field.label}</label>
          <select
            {...register(field.id, validationRules)}
            className="border border-gray-300 dark:border-gray-600 rounded-md p-2 w-full focus:outline-none focus:ring focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
          >
            <option value="">Select an option</option>
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors[field.id] && (
            <span className="text-red-500">{errors[field.id].message}</span>
          )}
        </div>
      );

    case 'radio':
      return (
        <div className="mb-4">
          <span className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{field.label}</span>
          {field.options?.map(option => (
            <div key={option.value} className="flex items-center mb-1">
              <input
                {...register(field.id, validationRules)}
                type="radio"
                value={option.value}
                id={option.value}
                className="mr-2"
              />
              <label htmlFor={option.value} className="text-gray-700 dark:text-gray-300">{option.label}</label>
            </div>
          ))}
          {errors[field.id] && (
            <span className="text-red-500">{errors[field.id].message}</span>
          )}
        </div>
      );

    default:
      return null; // Handle unsupported types if necessary
  }
};

export default FormField;