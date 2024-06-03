export const random = (min: number, max: number, decimal = 0): number => {
  return Number((Math.random() * (max - min) + min).toFixed(decimal));
};
