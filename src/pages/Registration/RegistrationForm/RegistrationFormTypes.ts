import { Register } from "../../../redux/actions/authActions/types/RegisterActionsTypes";

type RegisterFormProps = {
    onSubmit: (values: Register) => void
};

export type RegisterFormTypes = (props: RegisterFormProps) => JSX.Element;

export type RegisterFormElement = {
    title: string,
    name: string,
    placeholder: string,
    type: string
};