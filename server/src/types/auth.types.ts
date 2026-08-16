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

export interface CreateUserInput {
  email: string;
  password?: string;
  name: string;
}
