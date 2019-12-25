import './scss/main.scss';
import showMenu from './js/showMenu';

showMenu();


// $nt: 30;
const aX = Math.round(Math.sqrt(3)*100);
const aY = 0;
const bX = Math.round(Math.sqrt(3)*100);
const bY = 1*100;
const cX = Math.round(Math.sqrt(3 / 2)*100);
const cY = Math.round(Math.sqrt(3 / 2)*100);
const dX = 0;
const dY = 1*100;
const eX = 0;
const eY = 0;
const fX = Math.round(Math.sqrt(3 / 2)*100, 2);
const fY = Math.round(-1 / 2 * 100, 2);


  let x = 110;
  let y = 110;
  let r = 110;
  let result = '';
  for (let i = 0; i < 6; i++)
  {
    let angle = 2*3.14*i/6 + 11;
    result += `${Math.round(r*Math.cos(angle)+x)-15}px ${Math.round(r*Math.sin(angle)+y)}px,`;
  }

result = result.slice(0,result.length-1);
console.log(result);

let hexagon = document.querySelector('.hexagon');

//hexagon.style.cssText = `clip-path: polygon(${result});`;
