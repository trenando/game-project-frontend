import { FormikErrors, FormikTouched } from "formik";
import { RegistrationValues } from "../RegistrationTypes";

type RegistrationFormProps = {
  onSubmit: (values: RegistrationValues) => void;
  errorMessage: string | null;
  successMessage: string | null;
};

export type GenderValues = {
  radioName: string;
  value: "male" | "female";
};

export type RegistrationFormFunction = (props: RegistrationFormProps) => JSX.Element;

export type RegistrationFormElement = {
  title: string;
  name: string;
  placeholder: string;
  type: string;
  required: boolean;
  validate: (value: string) => string | undefined;
};

export type RegistrationFormik = {
  errors: FormikErrors<{
    [key: string]: string | number | undefined;
  }>;
  touched: FormikTouched<{
    [key: string]: string | number | undefined;
  }>;
  isSubmitting: boolean;
};

export type RegistrationFormAnotherElement = {
  type: string;
  name: string;
  title?: string;
  values?: GenderValues[];
  value?: string;
};
