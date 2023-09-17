import { FC } from "react";

type FormOutputProps = {
  heading: string;
  subheading: string;
  label: string;
};

const FormOutput: FC<FormOutputProps> = ({ heading, subheading, label }) => {
  return (
    <>
      <h2 className="form__output output__heading">
        {heading}
        <div className="output__subheading">{subheading}</div>
      </h2>
      <label className="output__label">{label}</label>
    </>
  );
};

export default FormOutput;
