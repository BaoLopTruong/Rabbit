cc.Class({
    extends: cc.Component,
    editor: {
        executionOrder: 1
    },

    properties: {
        _flag: true,
        _moveBack: false,
        _positionX: 0,
        _active: true

    },



    start() {
     cc.log("RabbitBlack: Hello");

        this._positionX = this.node.x;
        this.node.scale = this.node.scale * 1.5;
        //   cc.sequence(
        //     cc.tween(this.node)
        //     .to(1, {scale: 1})      // node.scale === 2
        //     .by(1, {scale: 2})      // node.scale === 4 (2+2)
        //     .by(1, {scale: 1})      // node.scale === 5
        //     .to(1, {scale: 2})      // node.scale === 2
        //     .start(),
        //    this.node.runAction( cc.moveTo(3, 100,0))

        //     )
      

    },
    scaleX(){

     
    },


    moveTo(dt=1) {
      this.node.x += dt *100;
    },
    moveBack(dt) {
        this.node.x -= dt * 100;
    },
    flipRabbit(){
        this.node.scaleX = -(this.node.scaleX)   ;
    },

    update(dt) {
   
            if(this._moveBack){
                this.moveBack(dt);
                if(this.node.x < this._positionX  ){
                this.node.scaleX = 0.75;
                }else{
                    return;
                } 
            }
            if(this.node.x >100 && this._moveBack == false){
                this.node.scaleX =- 0.75;
                this.moveBack(dt);
                this._moveBack =true;
            }else {
                this.moveTo(dt);
            }
        
  
 
       
    },
});
