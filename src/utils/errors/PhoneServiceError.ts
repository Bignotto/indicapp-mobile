export class PhoneServiceError extends Error {
  constructor() {
    super("Não foi possível enviar o SMS de validação.");
  }
}