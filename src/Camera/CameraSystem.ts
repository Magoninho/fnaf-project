import AnimatronicSystem from "../Animatronics/AnimatronicSystem.js";
import Button from "../Button.js";
import ImageUtils from "../ImageUtils.js";
import Map from "../Map.js";
import Static from "../Static.js";
import Camera from "./Camera.js";
import * as Constants from "../Constants.js"

export default class CameraSystem {
	public cameras: Camera[];
	public animatronicSystem: AnimatronicSystem;
	public currentCamera: number = 0; // camera index
	private map: Map;
	private buttons: Button[] = [];

	public staticAnimation: Static;
	private playback: HTMLImageElement;

	public async setup(cameras: Camera[]) {
		this.cameras = cameras;
		this.staticAnimation = new Static();
		await this.staticAnimation.setup();
		this.map = new Map();
		await this.map.setup();
		this.playback = await ImageUtils.loadImageFromUrl("images/other/playback.png");
	}

	public async addAnimatronicSystem(animatronicSystem: AnimatronicSystem) {
		this.animatronicSystem = animatronicSystem;
		await this.animatronicSystem.setup(this.cameras.length);
		// console.log(this.animatronicSystem.getAnimatronics()[0])
	}

	public updateAnimatronics() {
		for (const camera of this.cameras) {
			camera.clear();
		}
		for (const animatronic of this.animatronicSystem.getAnimatronics()) {
			let animatronicCameraIndex = animatronic.cameraIndex % this.cameras.length;
			this.cameras[animatronicCameraIndex].addAnimatronic(animatronic);
		}
	}

	public addButton(button: Button) {
		this.buttons.push(button);
	}

	public render(ctx: CanvasRenderingContext2D) {
		for (const animatronic of this.animatronicSystem.getAnimatronics()) {
			if (animatronic.jumpscareObj.activated) {
				animatronic.render(ctx);
				return;
			}
		}
		this.cameras[this.currentCamera].render(ctx);
		this.map.render(ctx);
		ctx.drawImage(this.playback, -50, -50, Constants.WIDTH+70, Constants.HEIGHT+70)

		this.staticAnimation.update();
		this.staticAnimation.render(ctx);

		for (const button of this.buttons) {
			button.render(ctx);
		}
	}

	public setCamera(cameraIndex: number): void {
		this.currentCamera = cameraIndex;
	}

	public getCameras(): Camera[] {
		return this.cameras;
	}

}