/// <reference path="../managers/asset.ts" />
module objects {
    // Cloud class
    export class Cloud {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "cloud");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.dx = 5;
            this.reset();

            game.addChild(this.image);
        }

        update() {
         
            this.image.x -= this.dx;
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