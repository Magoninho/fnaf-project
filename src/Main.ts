import Game from "./Game.js";
import * as Constants from "./Constants.js";

const canvas: HTMLCanvasElement = document.getElementById("game-canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

document.getElementById('start-btn').addEventListener("click", function() {
	document.getElementById('start-btn').parentNode.removeChild(document.getElementById('start-btn'));
	(document.getElementById('ambience') as HTMLAudioElement).play();
	start();
})

async function start() {
	let game = new Game(canvas);
	await game.start();
}