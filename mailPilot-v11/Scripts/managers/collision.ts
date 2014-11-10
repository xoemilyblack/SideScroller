/// <reference path="../objects/enemy.ts" />
/// <reference path="../objects/ammo.ts" />
/// <reference path="../objects/tank.ts" />
/// <reference path="../objects/scoreboard.ts" />

module managers {
    // Collision Manager Class
    export class Collision {
        // class variables
        private tank: objects.Tank;
        private ammo: objects.Ammo;
        private enemies = [];
        private scoreboard: objects.Scoreboard;

        constructor(tank: objects.Tank, ammo: objects.Ammo, enemies, scoreboard: objects.Scoreboard) {
            this.tank = tank;
            this.ammo = ammo;
            this.enemies = enemies;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between plane and any cloud object
        private tankAndEnemy(enemy: objects.Enemy) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.tank.image.x;
            p1.y = this.tank.image.y;
            p2.x = enemy.image.x;
            p2.y = enemy.image.y;
            if (this.distance(p1, p2) < ((this.tank.height / 2) + (enemy.height / 2))) {
                createjs.Sound.play("thunder");
                this.scoreboard.lives -= 1;
                enemy.reset();
            }
        }

        // check collision between plane and island
        private tankAndAmmo() {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.tank.image.x;
            p1.y = this.tank.image.y;
            p2.x = this.ammo.image.x;
            p2.y = this.ammo.image.y;
            if (this.distance(p1, p2) < ((this.tank.height / 2) + (this.ammo.height / 2))) {
                createjs.Sound.play("yay");
                this.scoreboard.score += 100;
                this.ammo.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            for (var count = 0; count < constants.ENEMY_NUM; count++) {
                this.tankAndEnemy(this.enemies[count]);
            }
            this.tankAndAmmo();
        }
    }
} 