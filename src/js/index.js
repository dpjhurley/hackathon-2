'use strict';

const TILE_SIZE = 85;

let xpos = 685;
let ypos = 400;

document.addEventListener('keydown', (event) => {
  const pacFace = document.querySelector('.pacboy-active-dark');
  if(event.code === 'ArrowRight') {
    pacFace.style.backgroundPositionY = '0%';
    xpos += TILE_SIZE
    pacFace.style.left = `${xpos}px`;
    if (pacFace.style.backgroundPositionX === '100%') {
      pacFace.style.backgroundPositionX = '0%';
    } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
      pacFace.style.backgroundPositionX = '100%';
    }
  } else if (event.code === 'ArrowLeft') {
    pacFace.style.backgroundPositionY = '33%';
    xpos -= TILE_SIZE
    pacFace.style.left = `${xpos}px`;
    if (pacFace.style.backgroundPositionX === '100%') {
      pacFace.style.backgroundPositionX = '0%';
    } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
      pacFace.style.backgroundPositionX = '100%';
    }
  } else if (event.code === 'ArrowDown') {
    pacFace.style.backgroundPositionY = '66%';
    ypos -= TILE_SIZE
    pacFace.style.bottom = `${ypos}px`;
    if (pacFace.style.backgroundPositionX === '100%') {
      pacFace.style.backgroundPositionX = '0%';
    } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
      pacFace.style.backgroundPositionX = '100%';
    }
  } else if (event.code === 'ArrowUp') {
    pacFace.style.backgroundPositionY = '100%';
    ypos += TILE_SIZE
    pacFace.style.bottom = `${ypos}px`;
    if (pacFace.style.backgroundPositionX === '100%') {
      pacFace.style.backgroundPositionX = '0%';
    } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
      pacFace.style.backgroundPositionX = '100%';
    }
  } 
    
    // xpos += TILE_SIZE
    // pacFace.style.left = `${xpos}px`;
    // if (pacFace.style.backgroundPositionX === '100%') {
    //   pacFace.style.backgroundPositionX = '0%';
    // } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
    //   pacFace.style.backgroundPositionX = '100%';
    // }
});
//  changed from left/right to percentage for chrome

// const app = document.querySelector('#app')

// const pac1 = new Pacman (600, false);
// pac1.mount(app)