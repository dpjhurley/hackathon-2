'use strict';

class Pacman{
  constructor(xpos, ypos ,mouth) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.mouth = mouth;
  }

  render() {
    const entityElm = document.createElement('div');
    entityElm.className = 'entity entity--pac';
    entityElm.classList.add('pacboy-active-light');

    this.update(entityElm);
    document.addEventListener('keydown', (event) => {
      if(event.code === 'ArrowRight') {
        entityElm.style.backgroundPositionY = '0%';
        this.xpos += TILE_SIZE;
        entityElm.style.left = `${this.xpos}px`;
        this.move(entityElm)
      } else if (event.code === 'ArrowLeft') {
        entityElm.style.backgroundPositionY = '33%';
        this.xpos -= TILE_SIZE;
        entityElm.style.left = `${this.xpos}px`;
        this.move(entityElm);
      } else if (event.code === 'ArrowDown') {
        entityElm.style.backgroundPositionY = '66%';
        this.ypos += TILE_SIZE;
        entityElm.style.top = `${this.ypos}px`;
        this.move(entityElm);
      } else if (event.code === 'ArrowUp') {
        entityElm.style.backgroundPositionY = '100%';
        this.ypos -= TILE_SIZE;
        entityElm.style.top = `${this.ypos}px`;
        this.move(entityElm);
      }
    });

    return entityElm;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  update(entityElm) {
    if (this.mouth === true) {
    entityElm.style.backgroundPositionX = '0%';
    } else if (this.mouth === false) {
    entityElm.style.backgroundPositionX = '100%';
    }
    
  }

  move(entityElm) {
    if (this.mouth === true) {
    entityElm.style.backgroundPositionX = '100%';
    this.mouth = false;
    } else if (this.mouth === false) {
    entityElm.style.backgroundPositionX = '0%';
    this.mouth = true;
    }
  }   
}


