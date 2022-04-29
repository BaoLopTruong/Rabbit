cc.Class({
    extends: cc.Component,
    editor: {
        executionOrder: -1
    },

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.active = false;
    },

    start () {
     // this.node.angle = 90;
     cc.log("RabbitBrown: Hello, Im Brownie");
    },

    update (dt) {
        if(this.node.x <=100){
            this.node.x += (dt*100);
            this.node.angle += (-dt*200);
        }else{
            this.node.angle = 0;
        }
        
     
    },
});
