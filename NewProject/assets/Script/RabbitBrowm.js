cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
      
    },

    update (dt) {
        if(this.node.x <=100){
            this.node.x += (dt*20);
            this.node.angle += (dt*100);
        }
        if(this.node.x==100){
          this.node.angle -= (dt*100);
        }
    },
});
