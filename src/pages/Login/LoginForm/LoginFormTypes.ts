import { Authorization } from "../../../redux/actions/authActions/types/AuthActionsTypes";

type LoginFormProps = {
    onSubmit: (values: Authorization) => void
};

export type LoginFormEl = {
    title: string,
    name: string,
    placeholder: string,
    type: string,
    validate?: any
};

export type ValidateLogin = (maxLength: number, minLength?: number) => (value: string) => string | undefined;

export type LoginFormTypes = (props: LoginFormProps) => JSX.Element;