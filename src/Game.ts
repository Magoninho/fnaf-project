import AnimatronicSystem from "./Animatronics/AnimatronicSystem.js";
import Button from "./Button.js";
import Camera from "./Camera/Camera.js";
import CameraSystem from "./Camera/CameraSystem.js";
import { BONNIE, CHICA } from "./Constants.js";
import ImageUtils from "./ImageUtils.js";

export default class Game {
	private animatronicSystem: AnimatronicSystem;
	private cameraSystem: CameraSystem;
	private ctx: CanvasRenderingContext2D;

	constructor(ctx: CanvasRenderingContext2D) {
		this.cameraSystem = new CameraSystem();
		this.animatronicSystem = new AnimatronicSystem();
		this.ctx = ctx;
	}

	public async start() {
		// setting up cameras with images relative to index.html
		this.cameraSystem.setup([
			new Camera(await ImageUtils.loadImageFromUrl("images/cameras/camera0.png")),
			new Camera(await ImageUtils.loadImageFromUrl("images/cameras/camera1.png"))
		]);
		this.cameraSystem.addAnimatronics(this.animatronicSystem);
		
		this.cameraSystem.getCameras()[0].name = "Lobby";
		this.cameraSystem.getCameras()[1].name = "Corredor";
		
		this.setupButtons();
		this.cameraSystem.setCamera(0);


		this.cameraSystem.animatronicSystem.moveAnimatronic(CHICA);
		this.cameraSystem.animatronicSystem.moveAnimatronic(BONNIE);


		this.cameraSystem.updateAnimatronics();
		// this.cameraSystem.animatronicSystem.moveFreddy();


		// improvised game loop
		setInterval(() => {
			this.update();
			this.render();
		}, 1000/30);
	}

	private setupButtons() {
		// sistema temporario
		for (let c = 0; c < this.cameraSystem.getCameras().length; c++) {
			const btn = Button.createButtonElement("Camera " + c);
			document.getElementById("buttons").appendChild(btn);
			btn.addEventListener("click", () => {
				this.cameraSystem.setCamera(c);
				
				(document.getElementById("camera-change-audio") as HTMLAudioElement).load();
				(document.getElementById("camera-change-audio") as HTMLAudioElement).play();
			});
		}
	}

	private update() {

	}

	private render() {
		this.cameraSystem.render(this.ctx);
		// this.cameraSystem.animatronicSystem.renderAnimatronic(this.ctx, 0);
	}
}