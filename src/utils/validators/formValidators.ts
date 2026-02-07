type FieldType = 'text' | 'checkbox' | 'select' | 'number' | 'date' | string;
interface BaseField<T = unknown> {
  data: T;
  type?: FieldType;
  errorMessage?: string;
}

type FormField = string | number | boolean | BaseField<unknown> | string[];

export type FormFields = Record<string, FormField>;

interface ValidateFormResult {
  isValid: boolean;
  formData: Record<string, unknown>;
}

export function validateForm(form: FormFields, nonRequiredFields: string[] = []): ValidateFormResult {
  const formData: Record<string, unknown> = {};
  let isValid = true;

  for (const key in form) {
    const field = form[key];
    const isRequired = !nonRequiredFields.includes(key);

    if (typeof field === 'object' && field !== null && 'data' in field) {
      const value = field.data;
      const fieldType = field.type ?? 'text';

      let cleanedValue: unknown;

      if (fieldType === 'checkbox') {
        cleanedValue = Boolean(value);
        if (isRequired) {
          field.errorMessage = !cleanedValue ? field.errorMessage || 'This field is required' : '';
          if (!cleanedValue) isValid = false;
        } else {
          field.errorMessage = '';
        }
      } else if (typeof value === 'string') {
        cleanedValue = value.trim();
      } else if (Array.isArray(value)) {
        cleanedValue = value;
      } else {
        cleanedValue = value ?? '';
      }

      if (fieldType !== 'checkbox') {
        const isEmpty = (Array.isArray(cleanedValue) && cleanedValue.length === 0) || cleanedValue === '';
        if (isRequired) {
          field.errorMessage = isEmpty ? field.errorMessage || 'This field is required' : '';
          if (isEmpty) isValid = false;
        } else {
          field.errorMessage = '';
        }
      }

      formData[key] = cleanedValue;
    } else {
      const value = typeof field === 'string' ? field.trim() : (field ?? '');
      formData[key] = value;

      if (isRequired && typeof value === 'string' && value === '') {
        isValid = false;
      }
    }
  }

  return { isValid, formData };
}
