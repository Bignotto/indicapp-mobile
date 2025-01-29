function keepOnlyNumbers(str: string): string {
  return str.replace(/\D/g, '');
}

export default keepOnlyNumbers;