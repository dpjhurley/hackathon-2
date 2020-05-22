'use strict';

class Pacman{
    constructor(xpos, mouth) {
        this.xpos = xpos;
        this.mouth = mouth;
    }

    render() {
        const entityElm = document.createElement('div');
        entityElm.className = 'entity entity--pac';
        entityElm.classList.add('pacboy-active-light');

        this.update(entityElm);

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
      document.addEventListener('keydown', (event) => {
          if(event.code === 'ArrowRight') {
              this.moveRight(entityElm)
          }
      });
    }

    moveRight(entityElm) {
        this.xpos += TILE_SIZE;
        entityElm.style.left = `${this.xpos}px`;
        if (this.mouth === true) {
          entityElm.style.backgroundPositionX = '100%';
          this.mouth = false;
        } else if (this.mouth === false) {
          entityElm.style.backgroundPositionX = '0%';
          this.mouth = true;
        }
    }
    
}


