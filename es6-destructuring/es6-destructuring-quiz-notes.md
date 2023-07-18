# es6-destructuring-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is destructuring, conceptually?
  Assigns properties/values of objects/arrays to variables in a concise manner.

- What is the syntax for `Object` destructuring?
  let person = {
  firstName: 'John',
  lastName: 'Doe',
  currentAge: 28
  };

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

- What is the syntax for `Array` destructuring?
  let people = ['Holly', 'Tim', 'Brett'];

let [Holly, Tim, Brett, Monique] = people;

- How can you tell the difference between destructuring and creating `Object`/`Array` literals?
  destructuring magic happens when {} or [] are to the left of the assignment operator.
  creating magic happens when {} or [] are to the right of the assignment operator.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:
Object Destructuring

```javascript
let person = {
  firstName: 'John',
  lastName: 'Doe',
  currentAge: 28,
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // ''
console.log(age); // 28
```

Array Destructuring

```javascript
let people = ['Holly', 'Tim', 'Brett'];

let [Holly, Tim, Brett, Monique] = people;

console.log(Holly); // 'Holly'
console.log(Monique); // undefined
```
