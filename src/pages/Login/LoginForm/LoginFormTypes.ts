import { Authorization } from "../../../redux/actions/authActions/types/AuthActionsTypes";

type LoginFormProps = {
  onSubmit: (values: Authorization) => void;
  errorMessage: string | null;
};

export type LoginFormElement = {
  title: string;
  name: string;
  placeholder: string;
  type: string;
  validate: (value: string) => string | undefined;
};

export type ValidateLogin = (
  maxLength: number,
  minLength?: number
) => (value: string) => string | undefined;

export type LoginFormTypes = (props: LoginFormProps) => JSX.Element;
