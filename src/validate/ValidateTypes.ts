export type Rule = {
  test: (value: string) => string | null;
};

export type Rules = Rule[];

export interface ValidateType {
  required(): this;
  minLength(min: number): this;
  maxLength(max: number): this;
  validate(value: string): string;
}
