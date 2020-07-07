'use strict';

const TILE_SIZE = 85;


const app = document.querySelector('#app')
const stage = new Stage(15, 15);
stage.mount(app);


const pac1 = new Pacman (stage, 0, 0, true, 'girl', 'dark');
pac1.mount(stage.element);

document.addEventListener('keydown', (event) => {
  if(event.code === 'ArrowRight') {
    pac1.move('right');
  } else if (event.code === 'ArrowLeft') {
    pac1.move('left');
  } else if (event.code === 'ArrowDown') {
    pac1.move('down');
  } else if (event.code === 'ArrowUp') {
    pac1.move('up');
  }
});



