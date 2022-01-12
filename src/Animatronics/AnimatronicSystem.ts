import { BONNIE, CHICA, FREDDY } from "../Constants.js";
import ImageUtils from "../ImageUtils.js";
import Animatronic from "./Animatronic.js";
import AnimatronicSprite from "./AnimatronicSprite.js";

export default class AnimatronicSystem {
	private animatronics: Animatronic[];

	public async setup() {
		this.animatronics = [
			new Animatronic("Freddy"),
			new Animatronic("Chica"),
			new Animatronic("Bonnie")
		];

		// this.animatronics[0].addSprite(await ImageUtils.loadImageFromUrl("images/animatronics/Freddy/camera0/freddy.png"));
		// this.animatronics[1].addSprite(await ImageUtils.loadImageFromUrl("images/animatronics/Chica/camera1/chica.png"));
		// this.animatronics[2].addSprite(await ImageUtils.loadImageFromUrl("images/animatronics/Bonnie/camera0/bonnie.png"));

		// TODO: make an interface

		this.animatronics[BONNIE].addSprite(new AnimatronicSprite(
			0,
			await ImageUtils.loadImageFromUrl("images/animatronics/Bonnie/camera0/bonnie.png"),
			0,
			0,
			1280,
			720
		));

		this.animatronics[BONNIE].addSprite(new AnimatronicSprite(
			1,
			await ImageUtils.loadImageFromUrl("images/animatronics/Bonnie/camera1/bonnie.png"),
			761.6,
			0,
			192,
			720
		));

		this.animatronics[CHICA].addSprite(new AnimatronicSprite(
			1,
			await ImageUtils.loadImageFromUrl("images/animatronics/Chica/camera1/chica.png"),
			414.4,
			0,
			139.2,
			720
		));
	}

	// testing only
	public moveAnimatronic(animatronicIndex: number) {
		let animatronicCameraIndex: number = this.animatronics[animatronicIndex].cameraIndex;
		this.animatronics[animatronicIndex].cameraIndex = (animatronicCameraIndex + 1) % this.animatronics.length;
	}

	public getAnimatronics() {
		return this.animatronics;
	}


	public renderAnimatronic(ctx: CanvasRenderingContext2D, animatronicIndex: number) {
		this.animatronics[animatronicIndex].render(ctx);
	}
}