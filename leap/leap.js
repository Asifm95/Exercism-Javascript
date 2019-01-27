export const isLeap = year =>
  year % 4 !== 0 ? false : year % 100 !== 0 ? true : year % 400 === 0;
