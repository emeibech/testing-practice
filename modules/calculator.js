const calculator = {
  add: (num0, num1) => Math.round((num0 + num1) * 100) / 100,
  subtract: (num0, num1) => Math.round((num0 - num1) * 100) / 100,
  multiply: (num0, num1) => Math.round((num0 * num1) * 100) / 100,
  divide: (num0, num1) => Math.round((num0 / num1) * 100) / 100,
};

export default calculator;
