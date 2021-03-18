import { AuthorizationValues } from "../LoginTypes";

type LoginFormProps = {
  onSubmit: (values: AuthorizationValues) => void;
  errorMessage: string | null;
};

export type LoginFormElement = {
  title: string;
  name: string;
  placeholder: string;
  type: string;
  validate: (value: string) => string | undefined;
};

export type LoginFormFunction = (props: LoginFormProps) => JSX.Element;
