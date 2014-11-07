/// <reference path="../managers/asset.ts" />
var objects;
(function (objects) {
    // Ocean Class
    var Desert = (function () {
        function Desert(stage, game) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Bitmap(managers.Assets.loader.getResult("desert"));
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.reset();

            this.dx = -5;

            game.addChild(this.image);
        }
        Desert.prototype.update = function () {
            this.image.x += this.dx;
            if (this.image.x <= 0) {
                this.reset();
            }
        };

        Desert.prototype.reset = function () {
            this.image.x = -960;
        };

        Desert.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Desert;
    })();
    objects.Desert = Desert;
})(objects || (objects = {}));
//# sourceMappingURL=desert.js.map
