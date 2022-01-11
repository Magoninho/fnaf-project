import AnimatronicSystem from "../Animatronics/AnimatronicSystem.js";
import Camera from "./Camera.js";

export default class CameraSystem {
	public cameras: Camera[];
	public animatronicSystem: AnimatronicSystem;
	public currentCamera: number = 0; // camera index

	public async setup(cameras: Camera[]) {
		this.cameras = cameras;
	}

	public render() {
		this.cameras[this.currentCamera].render();
	}

	public setCamera(cameraIndex: number): void {
		this.currentCamera = cameraIndex;
	}

	public getCameras(): Camera[] {
		return this.cameras;
	}

}