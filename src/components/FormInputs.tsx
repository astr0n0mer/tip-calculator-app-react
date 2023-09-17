import { useId } from "react";

import { FormInput, RadioButton } from ".";

// type FormInputsProps = {

// }

const presetTips = [5, 10, 15, 25, 50];

const FormInputs = () => {
  const billId = useId();
  const tipId = useId();
  const numberOfPeopleId = useId();

  return (
    <fieldset className="form__fields">
      <FormInput label="Bill" error="Invalid input" htmlFor={billId}>
        <input
          type="number"
          inputMode="numeric"
          name="bill"
          id={billId}
          className="field__input input--bill"
          min="0.01"
          step="0.01"
          placeholder="0"
        />
      </FormInput>

      <FormInput label="Select Tip %" error="Invalid input" htmlFor={tipId}>
        <div className="button-grid">
          {presetTips.map((tip: number) => (
            <RadioButton key={tip} name="tip" label={`${tip}%`} value={tip} />
          ))}
          <input
            type="number"
            inputMode="numeric"
            name="tip"
            id={tipId}
            className="field__input field__button--custom"
            min="0"
            step="1"
            placeholder="Custom"
          />
        </div>
      </FormInput>

      <FormInput
        label="Number of People"
        error="Invalid input"
        htmlFor={numberOfPeopleId}
      >
        <input
          type="number"
          inputMode="numeric"
          name="number-of-people"
          id={numberOfPeopleId}
          className="field__input input--number-of-people"
          min="1"
          step="1"
          placeholder="0"
        />
      </FormInput>
    </fieldset>
  );
};

export default FormInputs;
