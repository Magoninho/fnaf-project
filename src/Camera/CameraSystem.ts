import AnimatronicSystem from "../Animatronics/AnimatronicSystem.js";
import Static from "../Static.js";
import Camera from "./Camera.js";

export default class CameraSystem {
	public cameras: Camera[];
	public animatronicSystem: AnimatronicSystem;
	public currentCamera: number = 0; // camera index

	public staticAnimation: Static;

	public async setup(cameras: Camera[]) {
		this.cameras = cameras;
		this.staticAnimation = new Static();
		this.staticAnimation.setup();
	}

	public addAnimatronics(animatronicSystem: AnimatronicSystem) {
		this.animatronicSystem = animatronicSystem;
		this.animatronicSystem.setup();
		// console.log(this.animatronicSystem.getAnimatronics()[0])
	}

	public updateAnimatronics() {
		for (const camera of this.cameras) {
			camera.clear();
		}
		for (const animatronic of this.animatronicSystem.getAnimatronics()) {
			let animatronicCameraIndex = animatronic.cameraIndex;
			this.cameras[animatronicCameraIndex].addAnimatronic(animatronic);
		}
	}

	public render(ctx: CanvasRenderingContext2D) {
		this.cameras[this.currentCamera].render(ctx);

		this.staticAnimation.update();
		this.staticAnimation.render(ctx);
	}

	public setCamera(cameraIndex: number): void {
		this.currentCamera = cameraIndex;
	}

	public getCameras(): Camera[] {
		return this.cameras;
	}

}