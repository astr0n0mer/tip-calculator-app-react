import { FC } from "react";

import { FormOutput, ResetButton } from ".";

type FormOutputsProps = {
  tipPerPerson: string;
  totalPerPerson: string;
};

const FormOutputs: FC<FormOutputsProps> = ({
  tipPerPerson,
  totalPerPerson,
}) => {
  return (
    <section className="form__outputs">
      <div className="output-grid">
        <FormOutput
          heading="Tip Amount"
          subheading="/ person"
          label={tipPerPerson}
        />
        <FormOutput
          heading="Total"
          subheading="/ person"
          label={totalPerPerson}
        />
      </div>

      <ResetButton />
    </section>
  );
};

export default FormOutputs;
