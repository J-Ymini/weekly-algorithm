export const addUpTo1 = (number) => {
  let total = 0;

  for (let i = 1; i <= number; i++) {
    total += i;
  }

  return total;
};

export const addUpTo2 = (number) => {
  return (number * (number + 1)) / 2;
};
