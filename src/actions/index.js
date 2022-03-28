export const incNumber = () => ({
  type: 'INCREMENT',
});

export const decNumber = (num) => ({
  type: 'DECREMENT',
  payload: num,
});
