export const sendParams = (obj: {
  [key: string]: string | null | boolean | object;
}) =>
  `?${Object.entries(obj)
    .map(([key, val]) => `${key}=${val}`)
    .join("&")}`;
