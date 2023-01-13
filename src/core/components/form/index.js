import { Form as FinalForm } from "react-final-form";
import { validateZodSchema } from "blitz";
export { FORM_ERROR } from "final-form";
export function Form({ children, submitText, schema, initialValues, onSubmit, ...props }) {
  return (
    <FinalForm
      initialValues={initialValues}
      validate={validateZodSchema(schema)}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, submitError }) => (
        <form onSubmit={handleSubmit} {...props}>
          {/* Form fields supplied as children are rendered here */}
          {children}

          {submitError && (
            <div>
              {submitError}
            </div>
          )}

          {submitText && (
            <button type="submit" disabled={submitting}>
              {submitText}
            </button>
          )}
        </form>
      )}
    />
  );
}
export default Form;
