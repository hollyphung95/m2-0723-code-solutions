const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

/* Using filter, create an array that contains only the even numbers in the numbers array,
 then log it to the console. */
const evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(`Only the even numbers in the numbers ${evenNumbers}`);

/* Using filter, create an array that contains all names that do not include a 'D' or 'd',
 then log it to the console. */
const pattern = /[^dD]/gi;
const namesWithoutD = names.filter((x) => !x.match(/[dD]/));
console.log(`All names that do not include a D or d ${namesWithoutD}`);
