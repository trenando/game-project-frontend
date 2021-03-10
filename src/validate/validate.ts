import { Rule, Rules } from "./ValidateTypes";

export class Validate {
  private rules: Rules = [];

  public required(): this {
    this.rules.push({
      test: (value: string) => (!value ? "Обязательно" : null),
    });
    return this;
  }

  public minLength(min: number): this {
    this.rules.push({
      test: (value: string) => (value.length < min ? `Минимальная длина ${min} символов` : null),
    });
    return this;
  }

  public maxLength(max: number): this {
    this.rules.push({
      test: (value: string) => (value.length > max ? `Максимальная длина ${max} символов` : null),
    });
    return this;
  }

  public validate(value: string): string {
    const errors = this.rules.reduce((result: any, rule: Rule) => {
      const error = rule.test(value);
      if (error) return [...result, error];
      return result;
    }, []);
    return errors[0];
  }
}
