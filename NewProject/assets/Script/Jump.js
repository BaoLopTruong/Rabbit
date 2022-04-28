cc.Class({
    extends: cc.Component,

    properties: {
        _count:0
    },

    setJump(){
       
        if(this._count == 3){
            cc.log("stop");
            this._count=0;
        }else{
            this._count++;
            this.node.y = this.node.y +50;
            //this.node.y = this.node.y -50;
           
        }
    },

    onLoad () {
        this.jumpAction = this.setJump();
        
    },

    start () {
      
    },

    update (dt) {
    },
});
