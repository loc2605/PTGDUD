// actions.js

// Action để cộng
export const add = (value) => ({
    type: 'ADD',
    payload: value,
  });
  
  // Action để trừ
  export const subtract = (value) => ({
    type: 'SUBTRACT',
    payload: value,
  });
  