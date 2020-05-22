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

    return entityElm;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  update(direction) {
    this.element.style.left = `${pac1.xpos}px`;
    this.element.style.top = `${pac1.ypos}px`;
    if (direction === 'right') {
        this.element.style.backgroundPositionY = '0%';
    } else if (direction === 'left') {
        this.element.style.backgroundPositionY = '33%';
    } else if (direction === 'down') {
        this.element.style.backgroundPositionY = '66%';
    } else if (direction === 'up') {
        this.element.style.backgroundPositionY = '100%';
    }
    if (this.mouth === true) {
    this.element.style.backgroundPositionX = '0%';
    } else if (this.mouth === false) {
    this.element.style.backgroundPositionX = '100%';
    }
    
  }

  move(direction) {
    if (direction === 'right') {
        this.xpos += TILE_SIZE;
    } else if (direction === 'left') {
        this.xpos -= TILE_SIZE;
    } else if (direction === 'down') {
        this.ypos += TILE_SIZE;
    } else if (direction === 'up') {
        this.ypos -= TILE_SIZE;
    }
    if (this.mouth === true) {
    this.element.style.backgroundPositionX = '100%';
    this.mouth = false;
    } else if (this.mouth === false) {
    this.element.style.backgroundPositionX = '0%';
    this.mouth = true;
    }
  }   
}


