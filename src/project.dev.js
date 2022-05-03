window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  RabbitBlack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "49cfcRz+JlDwItwN+0KEwUF", "RabbitBlack");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: {
        executionOrder: 1
      },
      properties: {
        _distance: 100,
        _flag: true,
        _moveBack: false,
        _positionX: 0,
        _active: true
      },
      onLoad: function onLoad() {
        this.node.active = false;
      },
      start: function start() {
        cc.log("RabbitBlack: Hello");
        this._positionX = this.node.x;
        this.node.scale = 1.5 * this.node.scale;
        this.moveLimit = this.node.x + this._distance;
      },
      moveTo: function moveTo(dt) {
        this.node.x += 100 * dt;
      },
      moveBack: function moveBack(dt) {
        this.node.x -= 100 * dt;
      },
      flipRabbit: function flipRabbit() {
        this.node.scaleX = -this.node.scaleX;
      },
      update: function update() {
        var dt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        if (this._moveBack) {
          this.moveBack(dt);
          if (!(this.node.x < this._positionX)) return;
          this.node.scaleX = .75;
        }
        if (this.node.x > this.moveLimit && false == this._moveBack) {
          this.node.scaleX = -.75;
          this.moveBack(dt);
          this._moveBack = true;
        } else this.moveTo(dt);
      }
    });
    cc._RF.pop();
  }, {} ],
  RabbitBrowm: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "be857glpVRIOaK7cbArpbUp", "RabbitBrowm");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: {
        executionOrder: -1
      },
      properties: {
        _distance: 100,
        grayRabit: {
          default: null,
          type: cc.Component
        }
      },
      onLoad: function onLoad() {
        this.node.active = false;
      },
      start: function start() {
        cc.log("RabbitBrown: Hello, Im Brownie");
        this.moveLimit = this.node.x + this._distance;
      },
      update: function update() {
        var dt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        if (this.node.x <= this.moveLimit) {
          this.node.x += 20 * dt;
          this.node.angle += 500 * -dt;
        } else {
          this.node.angle = 0;
          this.grayRabit.node.active = true;
        }
      }
    });
    cc._RF.pop();
  }, {} ],
  RabbitGray: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a94a5TyagBFtpxURJae61au", "RabbitGray");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: {
        executionOrder: 1
      },
      properties: {
        _checkJump: 0,
        _count: 0,
        _positionY: 0,
        _defaultLocationY: 0,
        blackRabit: {
          default: null,
          type: cc.Component
        }
      },
      onLoad: function onLoad() {
        this.node.active = false;
      },
      jumpUpAndDown: function jumpUpAndDown() {
        if (this.node.y < this._positionY + 50 && this._checkJump < 50) {
          this.node.y += 1;
          this._checkJump += 1;
        }
        if (50 == this._checkJump && this.node.y != this._positionY) {
          this.node.y -= 1;
          if (this.node.y == this._positionY) {
            this._checkJump = 0;
            this._count++;
          }
        }
      },
      start: function start() {
        cc.log("RabbitGray: Hmmm");
        this._defaultLocationY = this.node.y;
        this.jump = 0;
        this.count = 0;
        this._positionY = this.node.y;
      },
      update: function update(dt) {
        this._count < 3 ? this.jumpUpAndDown() : this.blackRabit.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ],
  RabbitWhite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0160aZHhtFPSYvFRuP9Qh3I", "RabbitWhite");
    "use strict";
    cc.Class({
      extends: cc.Component,
      editor: {
        executionOrder: -1
      },
      properties: {
        _distance: 100,
        brownRabit: {
          default: null,
          type: cc.Component
        }
      },
      start: function start() {
        cc.log("RabbitWhite: Hello");
        this.moveLimit = this.node.x + this._distance;
      },
      update: function update() {
        var dt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        this.node.x <= this.moveLimit ? this.node.x += 20 * dt : this.brownRabit.node.active = true;
      }
    });
    cc._RF.pop();
  }, {} ]
}, {}, [ "RabbitBlack", "RabbitBrowm", "RabbitGray", "RabbitWhite" ]);