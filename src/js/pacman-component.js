'use strict';

class Pacman{
  constructor(stage, xpos, ypos ,mouth, gender, color) {
    this.stage = stage;
    this.position = {x: xpos, y: ypos}
    this.mouth = mouth;
    this.gender = gender;
    this.color = color; 
    this.score = 0;
    this.alive = true;
  }

  render() {
    const entityElm = document.createElement('div');

    return entityElm;
  }

  mount(parent) {
    this.element = this.render();
    parent.appendChild(this.element);
    this.update();
  }

  move(direction) {
    this.updateFacing(direction);
    this.updateMouth();
    this.position = this.updateCollision(
        this.computeNewPosition(direction)
    );
    this.update();
  }
  
  update() {    
    this.updateAppearance();
    this.updatePosition();
  }

  computeNewPosition (direction) {
    if (direction === 'right' ) {
      return {x: this.position.x + 1, y: this.position.y };
    } else if (direction === 'left') {
      return {x: this.position.x - 1, y: this.position.y };
    } else if (direction === 'down') {
      return {x: this.position.x, y: this.position.y + 1};
    } else if (direction === 'up') {
      return {x: this.position.x, y: this.position.y - 1};
    }
  }

  updateCollision(newPos) {
    if (!this.stage.withinBorders(newPos.x, newPos.y)) {
      return this.position;
    }

    const collisionEntity = this.stage.collisionDetection(newPos.x, newPos.y);
    if (collisionEntity === null) {
      return newPos;
    } else if (collisionEntity.type === 'wall') {
      return this.position;
    } else if (collisionEntity.type === 'apple') {
      this.score +=1;
      this.stage.removeEntity(collisionEntity);
      return newPos;
    } else if (collisionEntity.type === 'bomb') {
      if (Math.random() > 0.5) {
        this.alive = !this.alive;
      }
      this.stage.removeEntity(collisionEntity);
      return newPos;
    }
  }

  updateAppearance() {
    if (this.alive === true) {
      this.element.className = 'entity entity--pac';
      this.element.classList.add(`pac${this.gender}-active-${this.color}`);
      this.element.innerHTML = `
        <div>Total = ${this.score}</div>
      `;
    } else {
      this.element.className = 'entity entity--tomb';
      this.element.innerHTML = '';
    }
  }

  updatePosition() {
    if (this.alive === true) {
      this.element.style.left = `${this.position.x * TILE_SIZE}px`;
      this.element.style.top = `${this.position.y * TILE_SIZE}px`;
    }
    
  }

  updateFacing(direction) {
    if (direction === 'right') {
      this.element.style.backgroundPositionY = '0%';
    } else if (direction === 'left') {
      this.element.style.backgroundPositionY = '33%';
    } else if (direction === 'down') {
      this.element.style.backgroundPositionY = '66%';
    } else if (direction === 'up') {
      this.element.style.backgroundPositionY = '100%';
    }
  }
  
  updateMouth() {
    if (this.mouth === true) {
      this.element.style.backgroundPositionX = '100%';
      this.mouth = false;
    } else if (this.mouth === false) {
      this.element.style.backgroundPositionX = '0%';
      this.mouth = true;
    }
  }
}


