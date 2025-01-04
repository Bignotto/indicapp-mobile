const truncatePreserveWord = (str: string, length: number) => {
  if (str.length <= length) return str;

  const truncated = str.substring(0, length);
  const lastSpace = truncated.lastIndexOf(' ');

  return lastSpace === -1
    ? truncated + '...'
    : truncated.substring(0, lastSpace) + '...';
}

export default truncatePreserveWord;