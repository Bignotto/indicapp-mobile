export class EmailInUseError extends Error {
  constructor() {
    super("Email já está em uso");
  }
}