/**
 * Created by pior on 15/10/21.
 */

module CarModeGame
{
    export class MainScene extends GameUtil.BassPanel
    {
        public constructor()
        {
            super();
        }
        public init():void
        {
            this.showBG();
        }

        private showBG():void
        {
            var bg : egret.Bitmap = GameUtil.createBitmapByName("bgImage");
            bg.x = this.stage.stageWidth/2;
            bg.y = this.stage.stageHeight/2;
            this.addChild(bg);
        }
    }
}