const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
console.log('In Order:\n');
values.forEach((val, index, values) => {
  console.log(val);
});

console.log('\n\nReverse Order:\n');
values.forEach((val, index, values) => {
  console.log(values[index * -1 + values.length - 1]);
});
