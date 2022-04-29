cc.Class({
    extends: cc.Component,
    editor: {
        executionOrder: 1
    },

    properties: {
        _checkJump: true,
        _count: 0
    },

    runJumpAction: function () {

        var jumpUp = cc.tween(this.node).by(1, { y: 50 }, { easing: 'sineOut' });

        var jumpDown = cc.tween(this.node).by(1, { y: -50 }, { easing: 'sineIn' });

        var tween = cc.tween(this.node).sequence(jumpUp, jumpDown)

        return cc.tween(this.node).repeatForever(tween);
    },

    onLoad: function () {

    //     var jumpAction = this.runJumpAction();
    //    cc.tween(this.node).then(jumpAction).start();

    },
    jumpUp() {
        this.node.y = this.node.y + 50;
    },
    jumpDown() {
        this.node.y = this.node.y + 50;
     
    },

    start() {
        if(this._count ==3){
            return;
           }else{
               this.jumpUp();
               cc.delayTime(3);
               this.jumpDown();
               cc.delayTime(3);
               this._count++;
           }
        cc.log("RabbitGray: Hmmm");
    },

    update: function (dt) {


    },
});
