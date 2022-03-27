export type Rule = {
  test: (value: string) => string | null;
};

export type Rules = Rule[];
