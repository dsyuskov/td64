export default function showMenu() {
  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.menu__list');
  const hamburgerLine = menuButton.children;
  console.log(hamburgerLine);
  let isOpenMenu = false;
  
  menuButton.addEventListener('click', () => {
    console.log('menu button');
    if (isOpenMenu) {
      isOpenMenu = !isOpenMenu;
      hamburgerLine[0].classList.remove('collapsed');
      hamburgerLine[1].classList.remove('turnLeft');
      hamburgerLine[2].classList.remove('turnRight');
      hamburgerLine[3].classList.remove('collapsed');
      menu.classList.remove('open-menu');
    } else {
      isOpenMenu = !isOpenMenu;
      hamburgerLine[0].classList.add('collapsed');
      hamburgerLine[1].classList.add('turnLeft');
      hamburgerLine[2].classList.add('turnRight');
      hamburgerLine[3].classList.add('collapsed');
      menu.classList.add('open-menu');
    }
  });
}
