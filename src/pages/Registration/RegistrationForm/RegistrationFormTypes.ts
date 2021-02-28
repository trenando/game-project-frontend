import { Register } from "../../../redux/actions/authActions/types/RegisterActionsTypes";

type RegisterFormProps = {
  onSubmit: (values: Register) => void;
  errorMessage: string | null;
  successMessage: string | null;
};

export type ValuesForm = {
  radioName: string;
  value: "male" | "female";
};

export type RegisterFormTypes = (props: RegisterFormProps) => JSX.Element;

export type RegisterFormElement = {
  title: string;
  name: string;
  placeholder: string;
  type: string;
  required: boolean;
  validate: (value: string) => string | undefined;
};

export type RegisterFormAnotherElement = {
  type: string;
  name: string;
  title?: string;
  placeholder?: string;
  values?: ValuesForm[];
};
