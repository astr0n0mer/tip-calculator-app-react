import { FC, useId } from "react";

type RadioButtonProps = {
  name: string;
  label: string;
  value: string | number | readonly string[] | undefined;
};

const RadioButton: FC<RadioButtonProps> = ({ name, label, value }) => {
  const id = useId();

  return (
    <>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="field__input--hidden"
      />
      <label htmlFor={id} className="field__button">
        {label}
      </label>
    </>
  );
};

export default RadioButton;
