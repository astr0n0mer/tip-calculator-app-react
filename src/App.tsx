import { useState } from "react";
import {
  FormInputs,
  FormOutputs,
  FormWithTwoSections,
  Header,
} from "./components";

import "./App.css";
import { formatAsCurrency } from "./utils";

const App = () => {
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalPerPerson, setTotalPerPerson] = useState(0);

  return (
    <>
      <Header />
      <main>
        <FormWithTwoSections
          left={
            <FormInputs
              setTipPerPerson={setTipPerPerson}
              setTotalPerPerson={setTotalPerPerson}
            />
          }
          right={
            <FormOutputs
              tipPerPerson={formatAsCurrency(tipPerPerson, "USD", 2)}
              totalPerPerson={formatAsCurrency(totalPerPerson, "USD", 2)}
            />
          }
        />
      </main>
    </>
  );
};

export default App;
