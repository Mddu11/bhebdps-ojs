const rotatorBlocks = document.querySelectorAll('.rotator');

rotatorBlocks.forEach(block => {
  const items = [...block.querySelectorAll('.rotator__case')];

  if (!items.length) return;

  let pos = items.findIndex(item => item.classList.contains('rotator__case_active'));
  if (pos < 0) {
    pos = 0;
    items[0].classList.add('rotator__case_active');
  }

  const applyColor = el => {
    const col = el.dataset.color;
    if (col) el.style.color = col;
  };
  applyColor(items[pos]);

  const switchItem = () => {
    const current = items[pos];
    current.classList.remove('rotator__case_active');

    pos = (pos + 1) % items.length;
    const next = items[pos];

    next.classList.add('rotator__case_active');
    applyColor(next);

    const timeout = parseInt(next.dataset.speed) || 1000;
    setTimeout(switchItem, timeout);
  };


  const initialSpeed = parseInt(items[pos].dataset.speed) || 1000;
  setTimeout(switchItem, initialSpeed);
});
