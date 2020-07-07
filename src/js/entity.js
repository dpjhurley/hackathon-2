'use strict';

class Entity {
    constructor(xpos, ypos, type) {
        this.xpos = xpos * TILE_SIZE;;
        this.ypos = ypos * TILE_SIZE;;
        this.type = type;
    }

    render() {
        const entityElm = document.createElement('div');
        entityElm.className = `entity entity--${this.type}`;
        entityElm.style.left = `${this.xpos}px`;
        entityElm.style.top = `${this.ypos}px`;

        return entityElm;
    }

    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
      
    }

    unmount() {
        this.element.parentNode.removeChild(this.element);
    }
}