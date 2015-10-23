/**
 * Created by pior on 15/10/21.
 */
var CarModeGame;
(function (CarModeGame) {
    var StartGameScene = (function (_super) {
        __extends(StartGameScene, _super);
        function StartGameScene() {
            _super.call(this);
        }
        var __egretProto__ = StartGameScene.prototype;
        __egretProto__.init = function () {
            this.showBg();
        };
        //背景
        __egretProto__.showBg = function () {
            var bg = GameUtil.createBitmapByName("endBG_png");
            bg.x = this.stage.stageWidth / 2;
            bg.y = this.stage.stageHeight / 2;
            this.addChild(bg);
            var startbtn = new GameUtil.Menu(this, "beginBtn_png", "beginBtn_png", this.startGame);
            startbtn.setScaleMode();
            this.addChild(startbtn);
            startbtn.x = this.stage.stageWidth / 2;
            startbtn.y = this.stage.stageHeight / 2;
        };
        __egretProto__.startGame = function () {
            GameUtil.GameScene.runscene(new CarModeGame.MainScene(), GameUtil.GameConfig.CrossLeft, 400);
        };
        return StartGameScene;
    })(GameUtil.BassPanel);
    CarModeGame.StartGameScene = StartGameScene;
    StartGameScene.prototype.__class__ = "CarModeGame.StartGameScene";
})(CarModeGame || (CarModeGame = {}));
