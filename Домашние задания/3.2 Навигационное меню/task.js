
const allLinks = document.querySelectorAll('.menu__link');

allLinks.forEach(link => {
  link.addEventListener('click', event => {
    const parentItem = event.target.closest('.menu__item');


    if (!parentItem) {
      return;
    }

    const nested = parentItem.querySelector('.menu_sub');

    if (!nested) {
      return;
    }

    // Закрываем все открытые подменю внутри общего контейнера
    const rootMenu = parentItem.closest('.menu_main');
    if (rootMenu) {
      [...rootMenu.querySelectorAll('.menu_sub.menu_active')]
        .filter(sub => sub !== nested)
        .forEach(openSub => openSub.classList.remove('menu_active'));
    }

    // Переключаем текущее подменю
    nested.classList.toggle('menu_active');

    // Отменяем переход по ссылке
    event.preventDefault();
  });
});
