import { FC, MouseEventHandler, useId } from "react";

type RadioButtonProps = {
  name: string;
  label: string;
  value: string | number | readonly string[] | undefined;
  checked: boolean;
  onClick: MouseEventHandler<HTMLInputElement>;
};

const RadioButton: FC<RadioButtonProps> = ({
  name,
  label,
  value,
  checked,
  onClick,
}) => {
  const id = useId();

  return (
    <>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        className="field__input--hidden"
        onClick={onClick}
      />
      <label htmlFor={id} className="field__button">
        {label}
      </label>
    </>
  );
};

export default RadioButton;
