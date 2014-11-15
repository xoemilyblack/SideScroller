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
    function animate(elem, style, unit, from, to, time) {
        if (!elem)
            return;
        var start = new Date().getTime(), timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            elem.style[style] = (from + step * (to - from)) + unit;
            if (step == 1)
                clearInterval(timer);
        }, 25);
        elem.style[style] = from + unit;
    }
    animate(document.getElementById('challengeOneImageJavascript'), "left", "px", 0, 200, 1000);
})(states || (states = {}));
//# sourceMappingURL=loading.js.map
