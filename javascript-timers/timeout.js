/* eslint-disable no-unused-vars */
const $heading = document.querySelector('.message');

function helloThere() {
  $heading.textContent = 'Hello There';
}

setTimeout(helloThere, 2000);
