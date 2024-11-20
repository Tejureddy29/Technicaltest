// src/components/JsonEditor.tsx

import React, { useState } from 'react';
import { JsonSchema } from '../types';

interface JsonEditorProps {
  onChange: (schema: JsonSchema) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ onChange }) => {
  const [json, setJson] = useState<string>(''); // Start with an empty string
  const [error, setError] = useState<string | null>(null);

  const validateJson = (value: string) => {
    try {
      const parsed = JSON.parse(value);
      onChange(parsed); // Pass parsed schema to parent
      setError(null);
    } catch (e) {
      const errorMessage = (e as Error).message; // Cast e to Error
      setError(errorMessage);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJson(event.target.value);
    validateJson(event.target.value);
  };

  return (
    <div className="flex flex-col h-full">
      <textarea 
        className="border p-2 rounded-md h-full focus:outline-none focus:ring focus:ring-blue-500 bg-white dark:bg-gray-800 text-black dark:text-white" 
        value={json} 
        onChange={handleChange} 
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default JsonEditor;