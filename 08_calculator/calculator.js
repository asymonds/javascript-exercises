const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numArray) {
  return numArray.reduce((total, item) => {
    return total + item;
  }, 0);
};

const multiply = function (numArray) {
  return numArray.reduce((total, num) => {
    return total === 0 ? num : total * num;
  }, 0);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  let sum = 1;
  for (let i = 1; i < num; i++) {
    sum += sum * i;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
