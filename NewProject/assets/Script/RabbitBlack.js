cc.Class({
    extends: cc.Component,

    properties: {

    },



    start () {
  //this.node.scale = this.node.scale*1.5;
  if(this.node.x <=100){
    this.node.x += (1*100);
}else if(this.node.x>100){
    this.node.x -= (1*100);
}
    },

    update (dt) {
   
        
    },
});
