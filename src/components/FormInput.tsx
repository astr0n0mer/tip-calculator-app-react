import { FC, ReactNode } from "react";

type FormInputProps = {
  label: string;
  error: string;
  htmlFor: string;
  children: ReactNode;
};

const FormInput: FC<FormInputProps> = ({ label, error, htmlFor, children }) => {
  return (
    <div className="form__field field">
      <label htmlFor={htmlFor} className="field__label">
        {label}
      </label>

      <label
        htmlFor={htmlFor}
        className={`field__error ${error ? "js-error--active" : ""}`}
      >
        {error}
      </label>

      {children}
    </div>
  );
};

export default FormInput;
