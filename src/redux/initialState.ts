export const initialState: StateType = {
  login: null,
  name: null,
  surname: null,
  gender: null,
  age: null,
  postCount: 0,
  subCount: 0,
  isAuth: !!localStorage.getItem("token"),
  errorMessage: null,
  successMessage: null,
};

export type StateType = {
  login: string | null;
  name: string | null;
  surname: string | null;
  gender: string | null;
  age: number | null;
  postCount: number;
  subCount: number;
  isAuth: boolean;
  errorMessage: string | null;
  successMessage: string | null;
};
