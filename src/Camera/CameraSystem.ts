import AnimatronicSystem from "../Animatronics/AnimatronicSystem.js";
import Button from "../Button.js";
import ImageUtils from "../ImageUtils.js";
import Map from "../Map.js";
import Static from "../Static.js";
import Camera from "./Camera.js";
import * as Constants from "../Constants.js"
import Input from "../Input.js";

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

	public updateCameras() {
		for (const camera of this.cameras) {
			camera.clear();
			camera.udpate();
		}
		for (const animatronic of this.animatronicSystem.getAnimatronics()) {
			let animatronicCameraIndex = animatronic.cameraIndex % this.cameras.length;
			this.cameras[animatronicCameraIndex].addAnimatronic(animatronic);
			this.cameras[animatronicCameraIndex].udpate();
		}
	}

	public setupButtons(canvas: HTMLCanvasElement) {
		let buttonInfo = {
			button0: {
				innerText: "CAM0",
				x: 989,
				y: 306
			},
			button1: {
				innerText: "CAM1",
				x: 980,
				y: 360
			},
			button2: {
				innerText: "CAM2",
				x: 870,
				y: 413
			},
			button3: {
				innerText: "CAM3",
				x: 1216,
				y: 400
			}
		};
		
		// FIXME: Store first, then render
		for (let c = 0; c < this.getCameras().length; c++) {
			const btnIndex = buttonInfo[`button${c}`];
			const btn = new Button(btnIndex.innerText, btnIndex.x, btnIndex.y, 50, 35);
			if (this.currentCamera == c) btn.setClicked(true);
			canvas.addEventListener("click", (evt) => {
				let mousePos = Input.getMousePos(canvas, evt);
				if (btn.isInside(mousePos)) {
					btn.click((function() {this.setCamera(c)}.bind(this)));
					btn.setClicked(true);
					(document.getElementById("camera-change-audio") as HTMLAudioElement).load();
					(document.getElementById("camera-change-audio") as HTMLAudioElement).play();
				} else {
					btn.setClicked(false);
					console.log(mousePos);
				}
			});

			this.buttons.push(btn);
		}
	}

	public render(ctx: CanvasRenderingContext2D) {
		for (const animatronic of this.animatronicSystem.getAnimatronics()) {
			if (animatronic.jumpscare.activated) {
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