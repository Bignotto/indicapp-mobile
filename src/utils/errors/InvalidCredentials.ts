export class InvalidCredentialsError extends Error {
  constructor() {
    super("Email e senha não conferem");
  }
}