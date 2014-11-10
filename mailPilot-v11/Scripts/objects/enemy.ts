/// <reference path="../managers/asset.ts" />
module objects {
    // Enemy class
    export class Enemy {
        image: createjs.Bitmap;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        forward: number;
 

        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("enemy"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.forward = Math.floor((Math.random() * 10) + 5);
            this.reset();

            game.addChild(this.image);
        }

        update() {
         
            this.image.x -= this.forward;
            if (this.image.x <= -stage.canvas.width) {
                this.reset();
            }
        }

        reset() {
            this.image.x = stage.canvas.width + this.width;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
          
        }

        destroy() {
            game.removeChild(this.image);
        }
    }

}