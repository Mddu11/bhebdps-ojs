
(function () {
  let isRunning = true;
  let current = 1;

  const $ = id => document.getElementById(id);

  const showMole = idx => {
    $(`hole${idx}`).classList.add('hole_has-mole');
  };

  const hideMole = idx => {
    $(`hole${idx}`).classList.remove('hole_has-mole');
  };

  function cycle() {
    setTimeout(() => {
      if (!isRunning) return;

      hideMole(current);

      current = Math.floor(Math.random() * 9) + 1;

      showMole(current);
      cycle();
    }, 800);
  }

  cycle();
})();

let hits = 0;
let fails = 0;

document.querySelectorAll('.hole').forEach(hole => {
  hole.addEventListener('click', () => {
    const isMole = hole.classList.contains('hole_has-mole');

    if (isMole) {
      hits++;

      if (hits === 10) {
        alert('Победа!');
        hits = 0;
        fails = 0;
      }
    } else {
      fails++;

      if (fails === 5) {
        alert('Вы проиграли!');
        hits = 0;
        fails = 0;
      }
    }

    document.querySelector('#dead').textContent = hits;
    document.querySelector('#lost').textContent = fails;
  });
});
