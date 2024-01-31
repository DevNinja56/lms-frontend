export const capitalizeFirstLetter = (
  inputString: string
): string => {
  const words: string[] = inputString.split(" ");

  const capitalizedWords: string[] = words.map(
    (word) => {
      if (word.length === 0) {
        return "";
      }

      return (
        word.charAt(0).toUpperCase() +
        word.slice(1)
      );
    }
  );

  const result: string =
    capitalizedWords.join(" ");

  return result;
};
