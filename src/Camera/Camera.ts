import Animatronic from "../Animatronics/Animatronic.js";
import * as Constants from "../Constants.js";

export default class Camera {
	public name: string;
	public image: HTMLImageElement;
	public animatronics: Animatronic[] = []; // animatronics in camera

	constructor(image: HTMLImageElement) {
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

	public render(ctx: CanvasRenderingContext2D) {

		ctx.drawImage(this.image, 0, 0, Constants.WIDTH, Constants.HEIGHT);

		// console.log(this.animatronics)
		// TODO: render animatronics
		for (const animatronic of this.animatronics) {
			animatronic.render(ctx);
		}
	}
}