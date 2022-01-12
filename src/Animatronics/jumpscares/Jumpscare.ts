import * as Constants from "../../Constants.js";
import ImageUtils from "../../ImageUtils.js";

export default class Jumpscare {
	private image: HTMLImageElement;
	private row: number = 0;
	private rows: number;
	public activated: boolean = false;

	public async setup(image: HTMLImageElement) {
		this.image = image;
		this.rows = Math.floor(this.image.height / 720);
	}

	public activate() {
		(document.getElementById("jumpscare-audio") as HTMLAudioElement).play();
		(document.getElementById("ambience") as HTMLAudioElement).pause();
		this.activated = true;
	}

	public update() {
		this.row = (this.row + 1) % this.rows;
	}

	public render(ctx: CanvasRenderingContext2D) {
		this.update();
		ctx.drawImage(this.image, 0, (this.row * 722) + 4, Constants.WIDTH, Constants.HEIGHT, 0, 0, Constants.WIDTH, Constants.HEIGHT);
	}

}