export interface JsonSchema {
    title?: string;
    type: string;
    properties?: { [key: string]: JsonSchema };
    required?: string[];
  }
  
  export interface FormFieldProps {
    field: JsonSchema;
    register: any;
    errors: any;
  }