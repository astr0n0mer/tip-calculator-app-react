import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useId,
  useState,
} from "react";

import { FormInput, RadioButton } from ".";

type FormInputsProps = {
  setTipPerPerson: Dispatch<SetStateAction<number>>;
  setTotalPerPerson: Dispatch<SetStateAction<number>>;
};

type InputAndError = {
  value: string;
  error: string;
};

const initialInputAndError: InputAndError = {
  value: "",
  error: "",
};

const presetTips = [5, 10, 15, 25, 50];

const FormInputs: FC<FormInputsProps> = ({
  setTipPerPerson,
  setTotalPerPerson,
}) => {
  const [bill, setBill] = useState<InputAndError>(() => initialInputAndError);
  const [presetTip, setPresetTip] = useState<number>();
  const [customTip, setCustomTip] = useState<InputAndError>(
    () => initialInputAndError
  );
  const [numberOfPeople, setNumberOfPeople] = useState<InputAndError>(
    () => initialInputAndError
  );

  const setInputAndError = useCallback(
    (
      event: ChangeEvent<HTMLInputElement>,
      setInputAndError: Dispatch<SetStateAction<InputAndError>>,
      min: number
    ) => {
      const target = event.target as HTMLInputElement;
      const value = target.value;
      const numericValue = target.valueAsNumber;

      let error = "";
      if (Number.isNaN(numericValue)) error = "Invalid number";
      if (min >= 0 && numericValue < 0) error = "Can't be negative";
      if (min > 0 && numericValue === 0) error = "Can't be 0";

      setInputAndError(() => ({ value, error }));
    },
    []
  );

  const setValuesPerPerson = useCallback(() => {
    if (!bill.value || !customTip.value || !numberOfPeople.value) {
      return;
    }

    const billValue = Number(bill.value);
    const tipPercentage = presetTip || Number(customTip.value);
    const numberOfPeopleValue = Number(numberOfPeople.value);

    const tipAmount = billValue * (tipPercentage / 100);
    const totalAmount = billValue + tipAmount;
    const tipPerPerson = tipAmount / numberOfPeopleValue;
    const totalPerPerson = totalAmount / numberOfPeopleValue;

    setTipPerPerson(() => tipPerPerson);
    setTotalPerPerson(() => totalPerPerson);
  }, [
    bill,
    presetTip,
    customTip,
    numberOfPeople,
    setTipPerPerson,
    setTotalPerPerson,
  ]);

  useEffect(setValuesPerPerson, [setValuesPerPerson]);

  const billId = useId();
  const tipId = useId();
  const numberOfPeopleId = useId();

  return (
    <fieldset className="form__fields">
      <FormInput label="Bill" error={bill.error} htmlFor={billId}>
        <input
          type="number"
          inputMode="numeric"
          name="bill"
          id={billId}
          className="field__input input--bill"
          min="0.01"
          step="0.01"
          placeholder="0"
          value={bill.value}
          onInput={(event: ChangeEvent<HTMLInputElement>) =>
            setInputAndError(event, setBill, 0)
          }
        />
      </FormInput>

      <FormInput label="Select Tip %" error={customTip.error} htmlFor={tipId}>
        <div className="button-grid">
          {presetTips.map((tip: number) => (
            <RadioButton
              key={tip}
              name="tip"
              label={`${tip}%`}
              value={tip}
              checked={tip === presetTip}
              onClick={() => setPresetTip(() => tip)}
            />
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
            value={customTip.value}
            onInput={(event: ChangeEvent<HTMLInputElement>) =>
              setInputAndError(event, setCustomTip, 0)
            }
            onFocus={() => setPresetTip(() => 0)}
          />
        </div>
      </FormInput>

      <FormInput
        label="Number of People"
        error={numberOfPeople.error}
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
          value={numberOfPeople.value}
          onInput={(event: ChangeEvent<HTMLInputElement>) =>
            setInputAndError(event, setNumberOfPeople, 1)
          }
        />
      </FormInput>
    </fieldset>
  );
};

export default FormInputs;
