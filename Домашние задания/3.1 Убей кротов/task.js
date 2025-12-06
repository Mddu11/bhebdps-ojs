const scoreHit = document.querySelector('#dead');
const scoreMiss = document.querySelector('#lost');

const holeById = num => document.querySelector(`#hole${num}`);

for (let idx = 1; idx <= 9; idx++) {
  const cell = holeById(idx);

  cell.addEventListener('click', () => {
    const hit = cell.classList.contains('hole_has-mole');


    const currentHits = parseInt(scoreHit.textContent);
    const currentMiss = parseInt(scoreMiss.textContent);

    if (hit) {
      scoreHit.textContent = currentHits + 1;
    } else {
      scoreMiss.textContent = currentMiss + 1;
    }

    const updatedHits = parseInt(scoreHit.textContent);
    const updatedMiss = parseInt(scoreMiss.textContent);

    if (updatedHits >= 10) {
      alert('Победа! Достигнуто 10 попаданий.');
      scoreHit.textContent = 0;
      scoreMiss.textContent = 0;
    }

    if (updatedMiss >= 5) {
      alert('Вы проиграли — слишком много промахов.');
      scoreHit.textContent = 0;
      scoreMiss.textContent = 0;
    }
  });
}

