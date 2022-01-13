import Animatronic from "../Animatronics/Animatronic.js";
import * as Constants from "../Constants.js";

export default class Camera {
	public name: string;
	public cameraNumber: number; // e.g. camera 0, camera 1...
	public image: HTMLImageElement;
	public animatronics: Animatronic[] = []; // animatronics in camera
	private spriteRow: number;

	constructor(cameraNum: number, image: HTMLImageElement) {
		this.cameraNumber = cameraNum;
		this.image = image;

	}

	public addAnimatronic(animatronic: Animatronic) {
		this.animatronics.push(animatronic);
	}

	public clear() {
		this.animatronics = [];
	}

	public hasAnimatronic(name: string): boolean {
		for (const a of this.animatronics) {
			if (a.name == name) {
				return true;
			} else {
				continue;
			}
		}
		return false;
	}

	public udpate() {
		switch (this.cameraNumber) {
			// IF CAMERA 0
			case 0:
				if (!this.hasAnimatronic("Freddy") &&
					!this.hasAnimatronic("Bonnie") &&
					!this.hasAnimatronic("Chica")) {
					console.log("asdf")
					this.spriteRow = 6;
				} else if (this.hasAnimatronic("Freddy") &&
					!this.hasAnimatronic("Bonnie") &&
					this.hasAnimatronic("Chica")) {
					this.spriteRow = 2;
				} else if (this.hasAnimatronic("Freddy") &&
					this.hasAnimatronic("Bonnie") &&
					!this.hasAnimatronic("Chica")) {
					this.spriteRow = 3;
				} else if (this.hasAnimatronic("Freddy") &&
					!this.hasAnimatronic("Bonnie") &&
					!this.hasAnimatronic("Chica")) {
					this.spriteRow = 4;
				} else {
					let randomState = Math.floor(Math.random() * 2);
					this.spriteRow = randomState;
				}
				break;
			// IF CAMERA 1
			case 1:
				if (!this.hasAnimatronic("Freddy") &&
					!this.hasAnimatronic("Bonnie") &&
					!this.hasAnimatronic("Chica")) {
					this.spriteRow = 0;
				} else if (!this.hasAnimatronic("Freddy") &&
					this.hasAnimatronic("Bonnie") &&
					!this.hasAnimatronic("Chica")) {
					this.spriteRow = 1;
				} else if (!this.hasAnimatronic("Freddy") &&
					!this.hasAnimatronic("Bonnie") &&
					this.hasAnimatronic("Chica")) {
					this.spriteRow = 3;
				} else if (this.hasAnimatronic("Freddy") &&
					!this.hasAnimatronic("Bonnie") &&
					!this.hasAnimatronic("Chica")) {
					this.spriteRow = 5;
				}
				break;
			// IF CAMERA 2
			case 2:
				if (!this.hasAnimatronic("Freddy") &&
					!this.hasAnimatronic("Bonnie") &&
					!this.hasAnimatronic("Chica")) {
					this.spriteRow = 0;
				} else if (!this.hasAnimatronic("Freddy") &&
					this.hasAnimatronic("Bonnie") &&
					!this.hasAnimatronic("Chica")) {
					this.spriteRow = 3;
				}
				break;

			// IF CAMERA 3
			case 3:
				if (!this.hasAnimatronic("Freddy") &&
					!this.hasAnimatronic("Bonnie") &&
					!this.hasAnimatronic("Chica")) {
					this.spriteRow = 0;
				} else if (!this.hasAnimatronic("Freddy") &&
					!this.hasAnimatronic("Bonnie") &&
					this.hasAnimatronic("Chica")) {
					this.spriteRow = 2;
				} else if (this.hasAnimatronic("Freddy") &&
					!this.hasAnimatronic("Bonnie") &&
					!this.hasAnimatronic("Chica")) {
					this.spriteRow = 3;
				}
				break;

			default:
				break;
		}
	}

	public render(ctx: CanvasRenderingContext2D) {

		ctx.drawImage(this.image, 0, this.spriteRow * 720, Constants.WIDTH, Constants.HEIGHT, 0, 0, Constants.WIDTH, Constants.HEIGHT);
		// ctx.drawImage(this.image, 0, 0, Constants.WIDTH, Constants.HEIGHT);

		// console.log(this.animatronics)
		// TODO: render animatronics
		// for (const animatronic of this.animatronics) {
		// 	animatronic.render(ctx);
		// }
	}
}