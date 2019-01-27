export const validate = num => {
  const arr = [...num.toString()].map(Number);
  let ans = 0;
  arr.forEach(n => (ans = ans + Math.pow(n, arr.length)));
  return ans === num ? true : false;
};
