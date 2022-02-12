import AnimatronicSystem from "./Animatronics/AnimatronicSystem.js";
import Button from "./Button.js";
import Camera from "./Camera/Camera.js";
import CameraSystem from "./Camera/CameraSystem.js";
import { BONNIE, CHICA, FREDDY } from "./Constants.js";
import ImageUtils from "./ImageUtils.js";
import Input from "./Input.js";
import popup from "./Utils.js";
import * as Constants from "./Constants.js";

export default class Game {
	private animatronicSystem: AnimatronicSystem;
	private cameraSystem: CameraSystem;
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	public getAnimatronicSystem(): AnimatronicSystem {
		return this.animatronicSystem;
	}

	constructor(canvas: HTMLCanvasElement) {
		this.cameraSystem = new CameraSystem();
		this.animatronicSystem = new AnimatronicSystem();
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
	}

	public async start() {
		let loading = document.createElement("h1");
		document.body.appendChild(loading);

		loading.innerHTML = "loading cameras...";
		// setting up cameras with images relative to index.html
		await this.cameraSystem.setup([
			new Camera(0, await ImageUtils.loadImageFromUrl("images/cameras/camera0.png")),
			new Camera(1, await ImageUtils.loadImageFromUrl("images/cameras/camera1.png")),
			new Camera(2, await ImageUtils.loadImageFromUrl("images/cameras/camera2.png")),
			new Camera(3, await ImageUtils.loadImageFromUrl("images/cameras/camera3.png")),

		]);

		
		loading.innerHTML = "loading animatronic system...";
		await this.cameraSystem.addAnimatronicSystem(this.animatronicSystem);

		this.cameraSystem.getCameras()[0].name = "Lobby";
		this.cameraSystem.getCameras()[1].name = "Corredor";

		this.cameraSystem.setupButtons(this.canvas);
		this.cameraSystem.setCamera(0);

		// TEMP
		let btnFreddy: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
		btnFreddy.innerHTML = "move freddy";
		btnFreddy.addEventListener("click", () => {
			this.cameraSystem.animatronicSystem.moveAnimatronic(FREDDY);
			this.cameraSystem.updateCameras();
			this.debugText(`${this.animatronicSystem.getAnimatronic(FREDDY).name} -> CAMERA ${this.animatronicSystem.getAnimatronic(FREDDY).cameraIndex}`);
		})
		document.body.appendChild(btnFreddy);

		let btnBonnie: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
		btnBonnie.innerHTML = "move Bonnie";
		btnBonnie.addEventListener("click", () => {
			this.cameraSystem.animatronicSystem.moveAnimatronic(BONNIE);
			this.cameraSystem.updateCameras();
			this.debugText(`${this.animatronicSystem.getAnimatronic(BONNIE).name} -> CAMERA ${this.animatronicSystem.getAnimatronic(BONNIE).cameraIndex}`);
		})
		document.body.appendChild(btnBonnie);
		let btnChica: HTMLButtonElement = document.createElement("button") as HTMLButtonElement;
		btnChica.innerHTML = "move Chica";
		btnChica.addEventListener("click", () => {
			this.cameraSystem.animatronicSystem.moveAnimatronic(CHICA);
			this.cameraSystem.updateCameras();
			this.debugText(`${this.animatronicSystem.getAnimatronic(CHICA).name} -> CAMERA ${this.animatronicSystem.getAnimatronic(CHICA).cameraIndex}`);
		})
		document.body.appendChild(btnChica);

		this.cameraSystem.updateCameras();

		(document.getElementById('ambience') as HTMLAudioElement).play();

		document.body.removeChild(loading);

		// this.cameraSystem.animatronicSystem.moveFreddy();



		// improvised game loop
		setInterval(() => {
			this.update();
			this.render();
		}, 1000 / 30);
	}

	private debugText(text: string) {
		let p = document.createElement("p");
		p.innerText = text;
		document.body.appendChild(p);
	}

	public getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	}

	private update() {

	}

	private render() {
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, Constants.WIDTH, Constants.HEIGHT);
		this.cameraSystem.render(this.ctx);
	}


	public setAnimatronicSystem(animatronicSystem: AnimatronicSystem): void {
		this.animatronicSystem = animatronicSystem;
	}

	public getCameraSystem(): CameraSystem {
		return this.cameraSystem;
	}

	public setCameraSystem(cameraSystem: CameraSystem): void {
		this.cameraSystem = cameraSystem;
	}
}