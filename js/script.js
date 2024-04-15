// 1
const factorial = (n) => ((n === 1 || n === 0) ? 1 : n * factorial(n - 1));
console.log(factorial(3));

// 2
const pow = (num, deg) => ((deg === 1) ? num : num * pow(num, deg - 1));
console.log(pow(5, 2));

// 3
const sum = (num1, num2) => ((num2 === 0) ? num1 : sum(num1 + 1, num2 - 1));
console.log(sum(7, 8));
