import Game from "./Game.js";
import * as Constants from "./Constants.js";

const canvas: HTMLCanvasElement = document.getElementById("game-canvas") as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvas.getContext("2d");


(async () => {
	let game = new Game(canvas);
	await game.start();
})()