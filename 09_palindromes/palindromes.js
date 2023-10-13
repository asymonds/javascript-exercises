const palindromes = function (word) {
  const origWord = word.toLowerCase().split("").filter(removePunctuation);
  const reverseWord = [...origWord].reverse("").join("");
  console.log(`${origWord.join("")} vs ${reverseWord}`);
  return origWord.join("") === reverseWord;
};

function removePunctuation(item) {
  if (item === "!" || item === " " || item === "," || item === ".") {
    return false;
  }
  return true;
}

// Do not edit below this line
module.exports = palindromes;
