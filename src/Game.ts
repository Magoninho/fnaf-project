import AnimatronicSystem from "./Animatronics/AnimatronicSystem.js";
import Button from "./Button.js";
import Camera from "./Camera/Camera.js";
import CameraSystem from "./Camera/CameraSystem.js";
import ImageUtils from "./ImageUtils.js";

export default class Game {
	private animatronicSystem: AnimatronicSystem;
	private cameraSystem: CameraSystem;

	constructor() {
		this.cameraSystem = new CameraSystem();
		this.animatronicSystem = new AnimatronicSystem();
	}

	public async start() {
		// setting up cameras with images relative to index.html
		this.cameraSystem.setup([
			new Camera(await ImageUtils.loadImageFromUrl("images/cameras/camera0.png")),
			new Camera(await ImageUtils.loadImageFromUrl("images/cameras/camera1.png")),
			new Camera(await ImageUtils.loadImageFromUrl("images/cameras/camera2.jpg"))
		]);

		
		this.cameraSystem.getCameras()[0].name = "Lobby";
		this.cameraSystem.getCameras()[1].name = "Corredor";
		this.cameraSystem.getCameras()[2].name = "Pirate Cove";
		
		this.setupButtons();
		this.cameraSystem.setCamera(1);
		this.cameraSystem.render();
	}

	private setupButtons() {
		// temporario
		for (let c = 0; c < this.cameraSystem.getCameras().length; c++) {
			const btn = Button.createButtonElement("Camera " + c);
			document.getElementById("buttons").appendChild(btn);
			btn.addEventListener("click", () => {
				this.cameraSystem.setCamera(c);
				this.cameraSystem.render();
				(document.getElementById("camera-change-audio") as HTMLAudioElement).load();
				(document.getElementById("camera-change-audio") as HTMLAudioElement).play();
			});
		}
	}

	private update() {

	}

	private render() {

	}
}