const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
const reversedValues = [];
console.log('In Order:\n');
values.forEach((val) => {
  console.log(val);
  reversedValues.unshift(val);
});

console.log('\n\nReverse Order:\n');
reversedValues.forEach((val) => {
  console.log(val);
});

console.log(`values:\t\t${values}\nreversed:\t${reversedValues}`);
