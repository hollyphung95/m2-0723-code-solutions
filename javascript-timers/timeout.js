const $heading = document.querySelector('.message');
function helloThere() {
  $heading.textContent = 'Hello There';
  clearTimeout(timer);
}
const timer = setTimeout(helloThere(), 2000);
