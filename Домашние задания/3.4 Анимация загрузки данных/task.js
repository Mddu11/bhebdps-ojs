const spinner = document.querySelector('#loader');
const listContainer = document.querySelector('#items');

function renderCurrencies(valutes) {
  listContainer.innerHTML = '';

  Object.values(valutes).forEach((v) => {
    const block = document.createElement('div');
    block.className = 'item';

    block.innerHTML = `
      <div class="item__code">${v.CharCode}</div>
      <div class="item__value">${v.Value}</div>
      <div class="item__currency">руб.</div>
    `;

    listContainer.appendChild(block);
  });
}

function fetchData() {
  const request = new XMLHttpRequest();
  request.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
  request.responseType = 'json';

  request.onload = () => {
    spinner.classList.remove('loader_active');

    if (request.status !== 200) {
      console.warn('Не удалось загрузить данные, код:', request.status);
      return;
    }

    const valutes = request.response?.response?.
