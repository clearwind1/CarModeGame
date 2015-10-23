/**
 * Created by pior on 15/10/21.
 */

module CarModeGame
{
    export class StartGameScene extends GameUtil.BassPanel
    {
        public constructor()
        {
            super();
        }

        public init():void
        {
            this.showBg();
        }

        //背景
        private showBg():void
        {
            //背景图
            var bg:egret.Bitmap = GameUtil.createBitmapByName("endBG_png");
            bg.x = this.stage.stageWidth/2;
            bg.y = this.stage.stageHeight/2;
            this.addChild(bg);

            //开始游戏按钮
            var startbtn:GameUtil.Menu = new GameUtil.Menu(this,"beginBtn_png","beginBtn_png",this.startGame);
            startbtn.setScaleMode();
            this.addChild(startbtn);
            startbtn.x = this.stage.stageWidth/2;
            startbtn.y = this.stage.stageHeight/2;

        }

        //开始游戏
        private startGame():void
        {
            GameUtil.GameScene.runscene(new MainScene(),GameUtil.GameConfig.CrossLeft,400);
        }
    }
}