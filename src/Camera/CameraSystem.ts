import AnimatronicSystem from "../Animatronics/AnimatronicSystem.js";
import Camera from "./Camera.js";

export default class CameraSystem {
	public cameras: Camera[];
	public animatronicSystem: AnimatronicSystem;
	public currentCamera: number = 0; // camera index

	public async setup(cameras: Camera[]) {
		this.cameras = cameras;
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
	}

	public setCamera(cameraIndex: number): void {
		this.currentCamera = cameraIndex;
	}

	public getCameras(): Camera[] {
		return this.cameras;
	}

}