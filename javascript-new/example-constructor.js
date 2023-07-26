/* complete the following tasks:
Define a function named ExampleConstructor with no parameters and an empty code block.

/* Log the value of the prototype property of the ExampleConstructor function to the console.

/* Log the typeof the prototype property of the ExampleConstructor to the console.

/* Call the ExampleConstructor function with new and assign the return value to a variable. Log that variable to the console..
Use the instanceof operator to check if the value of your variable is indeed an instance of ExampleConstructor and assign the result of that expression to another variable. Log that variable to the console. */

function ExampleConstructor() {}

console.log(
  'value of ExampleConstructor.prototype is :',
  ExampleConstructor.prototype
);

console.log(
  'typeof ExampleConstructor.prototype is :',
  typeof ExampleConstructor.prototype
);

const myExConstructor = new ExampleConstructor();
console.log('value of myExConstructor is : ', myExConstructor);

const instanceOfExConstructor = myExConstructor instanceof ExampleConstructor;
console.log('value of instanceOfExConstructor is : ', instanceOfExConstructor);
