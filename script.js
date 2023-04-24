let score = 0,
  monster,
  lastMonster = 0,
  timer = 2000,
  time = 0,
  ticker = null,
  clock = null;

function randommonster() {
  let monster = Math.floor(Math.random() * 8) + 1;
  if (monster == lastMonster) {
    return randommonster();
  }
  lastMonster = monster;
  return monster;
}
function changemonster() {
  if (time <= 0) {
  } else {
    $('#monster' + lastMonster).toggleClass('monsterActive');
    let monster = randommonster();
    $(`#monster${monster}`).toggleClass('monsterActive');
  }
}

function startGame() {
  clearInterval(ticker);
  time = 60;
  score = 0;
  $('#score').text(`Score: ${score}`);

  ticker = setInterval(changemonster, timer);
  clock = setInterval(() => {
    time--;
    if (time >= 0) {
      $('#time').text(`Time: ${time}`);
    }
  }, 1000);
}
const $mode = $('#mode');
function easy() {
  $mode.text('Mode: easy');
  timer = 3000;
}
function medium() {
  $mode.text('Mode: medium');
  timer = 1500;
}
function hard() {
  $mode.text('Mode: hard');
  timer = 750;
}
function newGame() {
  clearInterval(ticker);
  clearInterval(clock);
  startGame();
}

$('.monster').on('click', function () {
  // console.log($(this));
  $($(this)).removeClass('monsterActive');
  score++;
  $('#score').text(`Score: ${score}`);
});

// startGame();
