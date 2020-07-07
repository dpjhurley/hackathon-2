'use strict'
class Stage {
    constructor(width, height) {
        this.width = width;
        this.height = height;   
        this.entityArray = [];
    }

    render() {
        const stageElm = document.createElement('div');
        stageElm.className = 'stage';    
        stageElm.style.height = `${this.height * TILE_SIZE}px`;
        stageElm.style.width = `${this.width * TILE_SIZE}px`;

        return stageElm;
      }

      mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);

        fetch(`http://bootcamp.podlomar.org/api/pacman?width=${this.width}&height=${this.height}`)
          .then(resp => resp.json())
          .then((json) => {
            for (let i=0; i < json.walls.length; i++) {
              this.addEntity(new Entity(json.walls[i].x, json.walls[i].y, 'wall'));
            }
            for (let i=0; i < json.apples.length; i++) {
              this.addEntity(new Entity(json.apples[i].x, json.apples[i].y, 'apple'));
            } 
            for (let i=0; i < json.bombs.length; i++) {
              this.addEntity(new Entity(json.bombs[i].x, json.bombs[i].y, 'bomb'));
            }  
          })
      }

      removeEntity(entity) {
        const index = this.entityArray.indexOf(entity);
        if (index != -1) { //-1 if index isnt there so to be sure it exists only if it is not -1
          this.entityArray.splice(index, 1);
          entity.unmount()
        }
      }

      addEntity(entity) {
        entity.mount(this.element);
        this.entityArray.push(entity);
      }

      withinBorders(x, y) {
        if (x >= this.width || y >= this.height) {
          return false;
        }
    
        if (x < 0 || y < 0) {
          return false;
        }
    
        return true;
      }
      

      collisionDetection(x, y) {
        for (let i = 0; i < this.entityArray.length; i ++) {
          if (this.entityArray[i].xpos === x *TILE_SIZE && this.entityArray[i].ypos === y * TILE_SIZE) {
            return this.entityArray[i];
          }
        }
        return null; 

               
      }


}

// for (const entity of this.entityArray) {
//   if (entity.xpos === x *TILE_SIZE && entity.ypos === y * TILE_SIZE) {
//     return entity;
//   }
// }