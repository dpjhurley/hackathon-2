'use strict';

const TILE_SIZE = 85;

let xpos = 685;

document.addEventListener('keydown', (event) => {
  if(event.code === 'ArrowRight') {
    const pacFace = document.querySelector('.pacboy-active-dark');
    xpos += TILE_SIZE
    pacFace.style.left = `${xpos}px`;
    if (pacFace.style.backgroundPositionX === '100%') {
      pacFace.style.backgroundPositionX = '0%';
    } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
      pacFace.style.backgroundPositionX = '100%';
    }
    
  }
});
 //changed from left/right to percentage for chrome
class Pacman{
    constructor(xpos, mouth) {
        this.xpos = xpos;
        this.mouth = mouth;
    }

    moveRight() {
        const pacFace = document.querySelector('.pacboy-active-dark');
        xpos += TILE_SIZE
        pacFace.style.left = `${xpos}px`;
        if (pacFace.style.backgroundPositionX === '100%') {
          pacFace.style.backgroundPositionX = '0%';
        } else if (pacFace.style.backgroundPositionX === '0%' || pacFace.style.backgroundPositionX === '') {
          pacFace.style.backgroundPositionX = '100%';
        }
    }
    update() {
        document.addEventListener('keydown', (event) => {
            if(event.code === 'ArrowRight') {
                moveRight()
            }
        });
    }
}

