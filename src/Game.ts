import AnimatronicSystem from "./Animatronics/AnimatronicSystem.js";
import Button from "./Button.js";
import Camera from "./Camera/Camera.js";
import CameraSystem from "./Camera/CameraSystem.js";
import { BONNIE, CHICA } from "./Constants.js";
import ImageUtils from "./ImageUtils.js";
import Input from "./Input.js";

export default class Game {
	private animatronicSystem: AnimatronicSystem;
	private cameraSystem: CameraSystem;
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;


	constructor(canvas: HTMLCanvasElement) {
		this.cameraSystem = new CameraSystem();
		this.animatronicSystem = new AnimatronicSystem();
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
	}

	public async start() {
		// setting up cameras with images relative to index.html
		await this.cameraSystem.setup([
			new Camera(await ImageUtils.loadImageFromUrl("images/cameras/camera0.png")),
			new Camera(await ImageUtils.loadImageFromUrl("images/cameras/camera1.png"))
		]);

		this.cameraSystem.addAnimatronicSystem(this.animatronicSystem);
		
		this.cameraSystem.getCameras()[0].name = "Lobby";
		this.cameraSystem.getCameras()[1].name = "Corredor";
		
		this.setupButtons();
		this.cameraSystem.setCamera(0);
		
		this.cameraSystem.animatronicSystem.moveAnimatronic(CHICA);
		
		
		this.cameraSystem.updateAnimatronics();
		// this.cameraSystem.animatronicSystem.moveFreddy();
		
		

		// improvised game loop
		setInterval(() => {
			this.update();
			this.render();
		}, 1000/30);
	}

	private setupButtons() {
		let buttonInfo = {
			button0: {
				innerText: "CAM0",
				x: 994,
				y: 350
			},
			button1: {
				innerText: "CAM1",
				x: 982,
				y: 400
			}
		};
		
		for (let c = 0; c < this.cameraSystem.getCameras().length; c++) {
			const btnIndex = buttonInfo[`button${c}`];
			const btn = new Button(btnIndex.innerText, btnIndex.x, btnIndex.y, 45, 30);
			this.canvas.addEventListener("click", (evt) => {
				let mousePos = Input.getMousePos(this.canvas, evt);
				if (btn.isInside(mousePos)) {
					btn.click((function() {this.cameraSystem.setCamera(c)}.bind(this)));
					(document.getElementById("camera-change-audio") as HTMLAudioElement).load();
					(document.getElementById("camera-change-audio") as HTMLAudioElement).play();
				} else {
					console.log(mousePos);
				}
			});

			this.cameraSystem.addButton(btn);
		}
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
		this.cameraSystem.render(this.ctx);
	}
}