/* eslint-disable default-param-last */
const initialState = 0;
const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - action.payload;
    default: return state;
  }
};

export default changeTheNumber;
