/**
 * Returns the input value formatted as currency
 * @param input Amount to be formatted as currency
 * @param maximumFractionDigits Maximum number of digits allowed after period
 * @returns string
 */
export const formatAsCurrency = (
  input: number,
  currency: string,
  maximumFractionDigits: number
): string => {
  const formatOptions: Intl.NumberFormatOptions = {
    currency,
    maximumFractionDigits,
    style: "currency",
  };

  const formattedInput = new Intl.NumberFormat("en-US", formatOptions).format(
    input
  );
  return formattedInput;
};
