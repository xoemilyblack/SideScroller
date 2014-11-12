﻿var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "desert", src: "assets/images/desert.fw.png" },
        { id: "tank", src: "assets/images/tank.fw.png" },
        { id: "enemy", src: "assets/images/enemy.fw.png" },
        { id: "ammo", src: "assets/images/ammo.fw.png" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/explosion.mp3" },
        { id: "yay", src: "assets/sounds/reload.mp3" },
        { id: "soundtrack", src: "assets/sounds/soundtrack.mp3" }
    ];

    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [112, 2, 130, 97],
            [2, 2, 108, 117],
            [364, 2, 114, 97],
            [592, 2, 106, 97],
            [244, 2, 118, 97],
            [480, 2, 110, 97],
            [700, 2, 102, 97],
            [804, 2, 94, 80],
            [900, 2, 82, 72],
            [1419, 2, 213, 67],
            [984, 2, 216, 68],
            [1202, 2, 215, 68]
        ],
        "animations": {
            "instructionsButton": [9],
            "playButton": [10],
            "tryAgainButton": [11],
            "explosion": {
                frames: [1, 0, 3, 4, 2, 5, 6, 7, 8],
                next: false,
                speed: 1
            }
        }
    };

    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            createjs.Sound.alternateExtensions = ["mp3"];
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map
