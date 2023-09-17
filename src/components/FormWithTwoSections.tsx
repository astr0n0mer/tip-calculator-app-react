import { FC, ReactNode } from "react";

type FormWithTwoSectionsProps = {
  left: ReactNode;
  right: ReactNode;
};

const FormWithTwoSections: FC<FormWithTwoSectionsProps> = ({ left, right }) => {
  return (
    <form className="form">
      {left}
      {right}
    </form>
  );
};

export default FormWithTwoSections;
