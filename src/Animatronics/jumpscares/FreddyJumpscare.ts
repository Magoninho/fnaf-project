import * as Constants from "../../Constants.js";
import ImageUtils from "../../ImageUtils.js";

export default class Jumpscare {
	private image: HTMLImageElement;
	private row: number = 0;

	public async setup() {
		this.image = await ImageUtils.loadImageFromUrl("images/Animatronics/Freddy/jumpscare.png");
	}

	public update() {
		this.row = (this.row + 1) % 7;
	}

}