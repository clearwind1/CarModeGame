/**
 * Created by pior on 15/10/21.
 */
var CarModeGame;
(function (CarModeGame) {
    var MainScene = (function (_super) {
        __extends(MainScene, _super);
        function MainScene() {
            _super.call(this);
        }
        var __egretProto__ = MainScene.prototype;
        __egretProto__.init = function () {
            this.showBG();
        };
        __egretProto__.showBG = function () {
            var bg = GameUtil.createBitmapByName("bgImage");
            bg.x = this.stage.stageWidth / 2;
            bg.y = this.stage.stageHeight / 2;
            this.addChild(bg);
        };
        return MainScene;
    })(GameUtil.BassPanel);
    CarModeGame.MainScene = MainScene;
    MainScene.prototype.__class__ = "CarModeGame.MainScene";
})(CarModeGame || (CarModeGame = {}));
