const array1 = [42.42, 10, 28.2234, 3.2, 5, 12];

// format number to US dollar
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

// Pass a function to map
array1.forEach((val) => formatter.format(val.toFixed(2)));
const map1 = array1.map((x) => ({
  prices: Number.parseFloat(x),
  salePrices: Number.parseFloat(x / 2),
}));

console.log(map1);

const map2 = array1.map((x) => formatter.format(x));
console.log('values', map2);
