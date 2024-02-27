export const getPathname = (
  pathname: string,
  indexesToRemove: number[]
): string => {
  const parts = pathname.split("/").filter((item) => item !== "");
  indexesToRemove.forEach((index) => {
    if (index >= 0 && index < parts.length) {
      parts.splice(index, 1);
    }
  });
  return parts.join("/");
};
