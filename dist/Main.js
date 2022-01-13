var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Game from "./Game.js";
const DEBUG = false;
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
document.getElementById('start-btn').addEventListener("click", function () {
    start();
});
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        document.getElementById("game-canvas").style.display = "initial";
        document.getElementById('start').parentNode.removeChild(document.getElementById('start'));
        if (!DEBUG) {
            document.getElementById('ambience').play();
        }
        let game = new Game(canvas);
        yield game.start();
    });
}
if (DEBUG) {
    start();
}
//# sourceMappingURL=Main.js.map