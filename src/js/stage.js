'use strict'



class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;    }

    render() {
        const stageElm = document.createElement('div');
        stageElm.className = 'stage';    
        stageElm.style.height = `${this.height * TILE_SIZE}px`
        stageElm.style.width = `${this.width * TILE_SIZE}px`
        return stageElm;
      }

      mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
      }
}