const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const customFlat = function (arr) {
  const result = [];
  const flatten = (input) => {
    for (let i = 0; i < input.length; i += 1) {
      if (Array.isArray(input[i])) {
        flatten(input[i]);
      } else {
        result.push(input[i]);
      }
    }
  };

  flatten(arr);
  return (arguments.length > 1) ? console.error('Function accepts only 1 argument, too many arguments provided') : result;
};

console.log(customFlat(complexArray));
