const repeatString = function (string, timesToRepeat) {
  if (timesToRepeat < 0) return "ERROR";
  let repeatedString = "";

  for (let i = 0; i < timesToRepeat; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
