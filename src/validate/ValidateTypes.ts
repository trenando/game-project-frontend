type Valid = {
  maxLength: number;
  required?: boolean;
  minLength?: number;
};

export type Validate = ({
  required,
  maxLength,
  minLength,
}: Valid) => (value: string) => string | undefined;
