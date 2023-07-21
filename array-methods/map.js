const array1 = [42.42, 10, 28.2234, 3.2, 5, 12];

/*
Using map, create an array from prices that contains objects with the following structure,
then log it to the console:   { price: original_number, salePrice: original_number / 2 }
Using map, create an array that contains each number formatted as a price (e.g., $28.32),
 then log it to the console.
*/

// Pass a function to map
const map1 = array1.map((x) => ({
  prices: `$${x.toFixed(2)}`,
  salePrices: `$${(x / 2).toFixed(2)}`,
}));

console.log(map1);

const map2 = array1.map((x) => `$${x.toFixed(2)}`);
console.log('values', map2);
