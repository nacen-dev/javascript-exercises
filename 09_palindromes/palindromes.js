const palindromes = function (string) {
  let word = string.match(/\w/g).join("").toLowerCase();
  for (
    let start = 0, end = word.length - 1;
    start < Math.floor(word.length / 2);
    start++, end--
  ) {
    if (word[start] !== word[end]) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
