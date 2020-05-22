'use strict';

const TILE_SIZE = 85;
const width = 10;
const height = 5;
const app = document.querySelector('#app')
const stage = new Stage(width, height);
stage.mount(app);
const stageElm = document.querySelector('.stage');

const pac1 = new Pacman (0, 3, true, width, height);
pac1.mount(stageElm);

document.addEventListener('keydown', (event) => {
if(event.code === 'ArrowRight') {
  pac1.move('right');
  pac1.update('right');
} else if (event.code === 'ArrowLeft') {
  pac1.move('left');
  pac1.update('left');
} else if (event.code === 'ArrowDown') {
  pac1.move('down');
  pac1.update('down');
} else if (event.code === 'ArrowUp') {
  pac1.move('up');
  pac1.update('up');
}
});


