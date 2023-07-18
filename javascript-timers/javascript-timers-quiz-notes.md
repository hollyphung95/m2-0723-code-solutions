# javascript-timers-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a "callback" function?

- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?
  A promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

- How can you set up a function to be called repeatedly without using a loop?
  you can set up setInterval to call some function every - milliseconds so long as it is intervalID is still valid. it will keep running.

- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?
  The time, in milliseconds that the timer should wait before the specified function or code is executed.
  If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.

- What do `setTimeout()` and `setInterval()` return?
  The returned timeoutID is a positive integer value which identifies the timer created by the call to setTimeout(). This value can be passed to clearTimeout() to cancel the timeout.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
