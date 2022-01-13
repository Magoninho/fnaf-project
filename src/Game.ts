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
		// setting up cameras with images relative to index.html
		await this.cameraSystem.setup([
			new Camera(0, await ImageUtils.loadImageFromUrl("images/cameras/camera0.png")),
			new Camera(1, await ImageUtils.loadImageFromUrl("images/cameras/camera1.png")),
			new Camera(2, await ImageUtils.loadImageFromUrl("images/cameras/camera2.png")),
			new Camera(3, await ImageUtils.loadImageFromUrl("images/cameras/camera3.png")),
			
		]);

		await this.cameraSystem.addAnimatronicSystem(this.animatronicSystem);
		
		this.cameraSystem.getCameras()[0].name = "Lobby";
		this.cameraSystem.getCameras()[1].name = "Corredor";
		
		this.cameraSystem.setupButtons(this.canvas);
		this.cameraSystem.setCamera(0);
		
		this.cameraSystem.animatronicSystem.moveAnimatronic(BONNIE);
		this.cameraSystem.animatronicSystem.moveAnimatronic(BONNIE);
		// this.cameraSystem.animatronicSystem.moveAnimatronic(FREDDY);
		this.cameraSystem.animatronicSystem.moveAnimatronic(CHICA);
		// this.cameraSystem.animatronicSystem.moveAnimatronic(BONNIE);
		// let bonnieInterval = setInterval(() => {
		// 	this.cameraSystem.animatronicSystem.moveAnimatronic(BONNIE)
		// 	this.cameraSystem.updateAnimatronics();
		// 	(document.getElementById("hallway-audio") as HTMLAudioElement).play();
		// 	popup("bonnie se move <br><img src='https://i.pinimg.com/474x/c6/76/6d/c6766d4465593500f603ee7941cc34af.jpg'>");
		// 	clearInterval(bonnieInterval); // TEMP
		// }, 5000);

		// let chicaInterval = setInterval(() => {
			// this.cameraSystem.animatronicSystem.moveAnimatronic(CHICA)
		// 	this.cameraSystem.updateAnimatronics();
		// 	// popup("*chica se move*");
		// 	clearInterval(chicaInterval); // TEMP
		// }, 15000);

		// this.cameraSystem.animatronicSystem.moveAnimatronic(CHICA);
		// this.cameraSystem.animatronicSystem.moveAnimatronic(CHICA);
		// this.cameraSystem.animatronicSystem.moveAnimatronic(CHICA);
		this.cameraSystem.updateCameras();	
		
		// this.cameraSystem.animatronicSystem.moveFreddy();
		
		

		// improvised game loop
		setInterval(() => {
			this.update();
			this.render();
		}, 1000/30);
	}

	// private setupButtons() {
	// 	let buttonInfo = {
	// 		button0: {
	// 			innerText: "CAM0",
	// 			x: 994,
	// 			y: 350
	// 		},
	// 		button1: {
	// 			innerText: "CAM1",
	// 			x: 982,
	// 			y: 400
	// 		}
	// 	};
		
	// 	for (let c = 0; c < this.cameraSystem.getCameras().length; c++) {
	// 		const btnIndex = buttonInfo[`button${c}`];
	// 		const btn = new Button(btnIndex.innerText, btnIndex.x, btnIndex.y, 45, 30);
			
	// 		this.canvas.addEventListener("click", (evt) => {
	// 			let mousePos = Input.getMousePos(this.canvas, evt);
	// 			if (btn.isInside(mousePos)) {
	// 				btn.click((function() {this.cameraSystem.setCamera(c)}.bind(this)));
	// 				btn.setClicked(true);
	// 				(document.getElementById("camera-change-audio") as HTMLAudioElement).load();
	// 				(document.getElementById("camera-change-audio") as HTMLAudioElement).play();
	// 			} else {
	// 				btn.setClicked(false);
	// 				console.log(mousePos);
	// 			}
	// 		});

	// 		this.cameraSystem.addButton(btn);
	// 	}
	// }


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

    public getCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public setCanvas(canvas: HTMLCanvasElement): void {
        this.canvas = canvas;
    }

    public getCtx(): CanvasRenderingContext2D {
        return this.ctx;
    }

    public setCtx(ctx: CanvasRenderingContext2D): void {
        this.ctx = ctx;
    }
}