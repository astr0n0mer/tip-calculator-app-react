import {
  FormInputs,
  FormOutputs,
  FormWithTwoSections,
  Header,
} from "./components";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <FormWithTwoSections
          left={<FormInputs />}
          right={<FormOutputs tipPerPerson="$0.00" totalPerPerson="$0.00" />}
        />
      </main>
    </>
  );
};

export default App;
