export function formatNumberToPoints(value: number) {
  if (Number.isInteger(value)) {
    return value.toFixed(1);
  } else {
    return value.toString();
  }
}

export const getAvrRatting = (total: number, length: number) => {
  const avr = total ? +(total / length).toFixed(1) : 0.0;
  return avr;
};
