export interface RegisterInput {
  name: string;
  password: string;
  email: string;
}

export interface LoginInput {
  email: string;
  password?: string;
  rememberMe: boolean;
}
