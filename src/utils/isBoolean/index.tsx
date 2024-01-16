export const stringIsBoolean = (val: string | null) => {
  if (val === null) return false;
  return val === "true" ? true : false;
};
