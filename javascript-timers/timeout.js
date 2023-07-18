/* eslint-disable no-unused-vars */
const $heading = document.querySelector('.message');

function helloThere() {
  $heading.textContent = 'Hello There';
}
const timer = setTimeout(helloThere(), 2000);
