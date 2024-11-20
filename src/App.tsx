// src/App.tsx

import React, { useState } from 'react';
import JsonEditor from './components/JsonEditor';
import FormGenerator from './components/FormGenerator';
import ErrorBoundary from './components/ErrorBoundary';
import DarkModeToggle from './components/DarkModeToggle';

const App: React.FC = () => {
  const [formData, setFormData] = useState<any>(null);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full md:w-1/2 p-4 border-r border-gray-300 dark:border-gray-700">
        <h2 className="text-xl font-bold mb-4">JSON Editor</h2>
        <ErrorBoundary>
          <JsonEditor onChange={(schema) => setFormData(schema)} />
        </ErrorBoundary>
      </div>

      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Form Preview</h2>
        <DarkModeToggle />
        <ErrorBoundary>
          {formData ? (
            <FormGenerator formData={formData} />
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Please enter a valid JSON schema in the editor.</p>
          )}
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default App;