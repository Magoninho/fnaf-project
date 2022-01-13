import Game from "./Game.js";
import * as Constants from "./Constants.js";
const DEBUG = true;

const canvas: HTMLCanvasElement = document.getElementById("game-canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

document.getElementById('start-btn').addEventListener("click", function() {
	
	start();
})

async function start() {
	document.getElementById("game-canvas").style.display = "initial";
	document.getElementById('start').parentNode.removeChild(document.getElementById('start'));
	if (!DEBUG) { (document.getElementById('ambience') as HTMLAudioElement).play(); }
	let game = new Game(canvas);
	await game.start();
}

if (DEBUG) {
	start();
}