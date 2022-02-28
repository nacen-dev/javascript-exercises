// Iterative Solution
const fibonacci = (number) => {
  let num = Number(number);
  if (num < 0) return "OOPS";
  if (num <= 2) return 1;
  let previousNum = 1;
  let currentNum = 1;
  for (let i = 2, temp = 0; i < num; i++) {
    temp = currentNum;
    currentNum += previousNum;
    previousNum = temp;
  }
  return currentNum;
};

// Recursive Solution
// const fibonacci = (number) => {
//   if (number < 0) return "OOPS";
//   if (number <= 2) return 1;

//   return fibonacci(number-1) + fibonacci(number-2);
// }


// Do not edit below this line
module.exports = fibonacci;
