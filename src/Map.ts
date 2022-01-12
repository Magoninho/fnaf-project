import ImageUtils from "./ImageUtils.js";
import * as Constants from "./Constants.js";

export default class Map {
	private image: HTMLImageElement;

	public async setup() {
		this.image = await ImageUtils.loadImageFromUrl("images/other/map.png");
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.drawImage(this.image, Constants.WIDTH-400, Constants.HEIGHT-400, 400, 400);
	}
}