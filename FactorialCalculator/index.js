const num = 7;

function factorialCalculator(num) {
  let result = num;
  if (num === 0 || num === 1) return 1;
  for (var i = num - 1; i >= 1; i--) {
    result *= i;
  }
  return result;
}

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
