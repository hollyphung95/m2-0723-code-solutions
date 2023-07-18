const $text = document.querySelector('h1');
let $startTime = 4;

function countDown() {
  $text.textContent = $startTime--;

  if ($text.textContent === '0') {
    $text.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timer);
  }
  return $text;
}
const timer = setInterval(countDown, 1000);
