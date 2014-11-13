/// <reference path="../objects/button.ts" />
/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/ammo.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/desert.ts" />
/// <reference path="../objects/tank.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
/*
File: play.ts
Author: Emily Black
Website: webdesign4.georgianc.on.ca/~200261931/comp2068/SideScroller/index.html
Description: This is a tank side scroller game. 
Revision: 1
Last Changed By: Emily Black
Date Last Modified: November 13, 2014
*/
module states {
    var addLife: Boolean = false;
     
    export function playState() {
        desert.update();
        ammo.update();
        tank.update();  
       


        for (var count = 0; count < constants.ENEMY_NUM; count++) {
            enemies[count].update();
        }

        collision.update();
        scoreboard.update();

        if (scoreboard.lives <= 0) {
            stage.removeChild(game);
            tank.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
        if (scoreboard.score == 1500 && !addLife) {
            scoreboard.lives = scoreboard.lives + 1;
            addLife = true;            
        }
       
     
    }
   
        // play state Function
        export function play(): void {
            // Declare new Game Container
            game = new createjs.Container();

            // Instantiate Game Objects
            desert = new objects.Desert(stage, game);
            ammo = new objects.Ammo(stage, game);
            tank = new objects.Tank(stage, game);

            // Show Cursor
            stage.cursor = "none";

            // Create multiple clouds
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                enemies[count] = new objects.Enemy(stage, game);
            }

            // Display Scoreboard
            scoreboard = new objects.Scoreboard(stage, game);

            // Instantiate Collision Manager
            collision = new managers.Collision(tank, ammo, enemies, scoreboard);

            stage.addChild(game);
        }
 
    }
    
