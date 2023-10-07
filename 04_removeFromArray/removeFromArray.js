const removeFromArray = function (arr, ...entries) {
  let response = arr;

  response = arr.filter((item) => item !== entries);
  console.log(response);
  return response;
};

// Do not edit below this line
module.exports = removeFromArray;
