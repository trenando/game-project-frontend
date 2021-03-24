import { FormikErrors, FormikTouched } from "formik";
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

export type LoginFormik = {
  errors: FormikErrors<{
    [key: string]: string;
  }>;
  touched: FormikTouched<{
    [key: string]: string;
  }>;
  isSubmitting: boolean;
};

export type LoginFormFunction = (props: LoginFormProps) => JSX.Element;
