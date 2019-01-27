export const solve = (x, y) =>
  isNaN(x) || isNaN(y)
    ? null
    : Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(1, 2)
    ? 10
    : Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(5, 2)
    ? 5
    : Math.pow(x, 2) + Math.pow(y, 2) <= Math.pow(10, 2)
    ? 1
    : 0;
