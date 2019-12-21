import './scss/main.scss';

const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');
let isOpenMenu = false;

menuButton.addEventListener('click', () => {
  console.log('menu button');
  if (isOpenMenu) {
    isOpenMenu = !isOpenMenu;
    menu.classList.remove('open-menu');
    menu.classList.add('close-menu');
  } else {
    isOpenMenu = !isOpenMenu;
    menu.classList.add('visible');
    menu.classList.add('open-menu');
  }
});
