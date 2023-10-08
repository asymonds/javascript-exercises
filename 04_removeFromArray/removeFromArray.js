const removeFromArray = function (arr, ...entries) {
  let filteredArray = [];
  arr.forEach((item) => {
    if (!entries.includes(item)) {
      filteredArray.push(item);
    }
  });

  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
