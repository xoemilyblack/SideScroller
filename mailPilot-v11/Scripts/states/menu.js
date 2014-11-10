/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/tank.ts" />
/// <reference path="../objects/desert.ts" />
/// <reference path="../objects/ammo.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
var states;
(function (states) {
    function playButtonClicked(event) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        currentState = constants.PLAY_STATE;
        changeState(currentState);
    }
    states.playButtonClicked = playButtonClicked;

    function instructionsButtonClicked(event) {
        var instructionsLabel;

        game.removeAllChildren();
        desert = new objects.Desert(stage, game);
        var message = new createjs.Text('', 'bold 15px Segoe UI', '#ffffff');
        message.text = "Use the mouse to control your tank up and down." + " Dodge the oncoming enemy tanks and pick up ammo to get points.";
        message.x = stage.canvas.width / 2;
        message.y = 130;
        message.textAlign = "center";
        message.lineWidth = this.canvas.width * .5;
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");
        playButton.addEventListener("click", playButtonClicked);
        instructionsLabel = new objects.Label(stage.canvas.width / 2, 30, "INSTRUCTIONS");
        game.addChild(instructionsLabel);
        game.addChild(message);
        game.addChild(playButton);

        stage.update();
    }
    states.instructionsButtonClicked = instructionsButtonClicked;

    function menuState() {
        desert.update();
    }
    states.menuState = menuState;

    function menu() {
        var gameNameLabel;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        desert = new objects.Desert(stage, game);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "TANK WARS");
        game.addChild(gameNameLabel);

        // Display Play Again Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "playButton");
        instructions = new objects.Button(stage.canvas.width / 2, 200, "instructionsButton");
        game.addChild(playButton, instructions);
        playButton.addEventListener("click", playButtonClicked);
        instructions.addEventListener("click", instructionsButtonClicked);

        stage.addChild(game);
    }
    states.menu = menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map
