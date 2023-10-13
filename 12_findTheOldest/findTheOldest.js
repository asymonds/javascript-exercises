const findTheOldest = function (arr) {
  // const sortedArr = arr.sort((a, b) => {
  //   return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth
  //     ? -1
  //     : 1;
  // });
  const oldest = arr.reduce((a, b) => {
    if (!a["yearOfDeath"]) {
      a.yearOfDeath = new Date().getFullYear();
    }
    if (!b["yearOfDeath"]) {
      b.yearOfDeath = new Date().getFullYear();
    }
    return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth
      ? { ...a }
      : { ...b };
  }, {});
  return oldest;
  console.log(oldest.name);
};

// Do not edit below this line
module.exports = findTheOldest;
