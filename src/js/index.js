'use strict';

const TILE_SIZE = 85;

// let xpos = 685;
// let ypos = 400;

// document.addEventListener('keydown', (event) => {
//   const pacFace = document.querySelector('.pacboy-active-dark');
//   if(event.code === 'ArrowRight') {
//     pacFace.style.backgroundPositionY = '0%';
//     xpos += TILE_SIZE
//     pacFace.style.left = `${xpos}px`;
//     if (pacFace.style.backgroundPositionX === '100%') {
//       pacFace.style.backgroundPositionX = '0%';
//     } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
//       pacFace.style.backgroundPositionX = '100%';
//     }
//   } else if (event.code === 'ArrowLeft') {
//     pacFace.style.backgroundPositionY = '33%';
//     xpos -= TILE_SIZE
//     pacFace.style.left = `${xpos}px`;
//     if (pacFace.style.backgroundPositionX === '100%') {
//       pacFace.style.backgroundPositionX = '0%';
//     } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
//       pacFace.style.backgroundPositionX = '100%';
//     }
//   } else if (event.code === 'ArrowDown') {
//     pacFace.style.backgroundPositionY = '66%';
//     ypos -= TILE_SIZE
//     pacFace.style.bottom = `${ypos}px`;
//     if (pacFace.style.backgroundPositionX === '100%') {
//       pacFace.style.backgroundPositionX = '0%';
//     } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
//       pacFace.style.backgroundPositionX = '100%';
//     }
//   } else if (event.code === 'ArrowUp') {
//     pacFace.style.backgroundPositionY = '100%';
//     ypos += TILE_SIZE
//     pacFace.style.bottom = `${ypos}px`;
//     if (pacFace.style.backgroundPositionX === '100%') {
//       pacFace.style.backgroundPositionX = '0%';
//     } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
//       pacFace.style.backgroundPositionX = '100%';
//     }
//   } 
// });
const app = document.querySelector('#app')

const pac1 = new Pacman (600, 400, true);
pac1.mount(app)

document.addEventListener('keydown', (event) => {
if(event.code === 'ArrowRight') {
  pac1.move('right');
  pac1.update();
} else if (event.code === 'ArrowLeft') {
  pac1.move('left');
  pac1.update();

} else if (event.code === 'ArrowDown') {
  pac1.move('down');
  pac1.update();

} else if (event.code === 'ArrowUp') {
  pac1.move('up');
  pac1.update();

}
});

