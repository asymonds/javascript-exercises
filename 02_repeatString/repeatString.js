const repeatString = function (string, num) {
  let response = "";
  for (i = 0; i < num; i++) {
    response += `${string}`;
  }
  return response;
};

// Do not edit below this line
module.exports = repeatString;
