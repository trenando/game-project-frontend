import React from "react";

type CreatePostFormProps = {
  onSubmit: (values: any) => void;
  successMessage: string | null;
  errorMessage: string | null;
};

export type CreatePostFormElement = {
  title: string;
  name: string;
  className: string;
  errorClassName: string;
  validError: string;
  placeholder: string;
  component: string;
  type: string;
  validate: (value: string) => string | null;
};

export type Fields = CreatePostFormElement[];

export type CreatePostFormFunction = React.FC<CreatePostFormProps>;
