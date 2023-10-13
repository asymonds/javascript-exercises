const fibonacci = function (num) {
  let firstNum = 1;
  let secondNum = 1;

  if (num === 1 || num === 2) {
    return 1;
  }

  if (num < 0) {
    return "OOPS";
  }

  for (let i = 0; i < num - 2; i++) {
    let hold = secondNum;
    secondNum += firstNum;
    firstNum = hold;
  }
  return secondNum;
};

// Do not edit below this line
module.exports = fibonacci;
