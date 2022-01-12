import ImageUtils from "./ImageUtils.js";
import * as Constants from "./Constants.js";

export default class Static {
	private texture: HTMLImageElement;
	private row: number = 0;

	public async setup() {
		this.texture = await ImageUtils.loadImageFromUrl("images/other/static.png");
	}

	public update() {
		this.row = (this.row + 1) % 7;
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.globalAlpha = 0.25;

		ctx.drawImage(this.texture, 0, this.row * 720, Constants.WIDTH, Constants.HEIGHT, 0, 0, Constants.WIDTH, Constants.HEIGHT);

		ctx.globalAlpha = 1.0;
	}
}