const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');

let index = 0;
let interval = setInterval(start, 3000);
function start() {
  index++;
  update();
}

const $prev = document.querySelector('#left');
const $next = document.querySelector('#right');

$prev.addEventListener('click', function (event) {
  index--;
  if (index < 0) {
    index = $tab.length - 1;
  }
  update();
});

$next.addEventListener('click', function (event) {
  index++;
  update();
});

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if ($tab[i] === event.target) {
        index = i;
      }
      update();
    }
  }
});

function update() {
  for (let i = 0; i < $tab.length; i++) {
    if (index > $tab.length - 1) {
      index = 0;
    }
    if ($tab[i] === $tab[index]) {
      $tab[i].className = 'tab active';
      $view[i].className = 'view';
    } else {
      $tab[i].classList = 'tab';
      $view[i].classList = 'view hidden';
    }
  }
  reset();
}

function reset() {
  clearInterval(interval);
  interval = setInterval(start, 3000);
}
