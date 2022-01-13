import { BONNIE, CHICA, FREDDY } from "../Constants.js";
import ImageUtils from "../ImageUtils.js";
import Animatronic from "./Animatronic.js";
import AnimatronicSprite from "./AnimatronicSprite.js";

export default class AnimatronicSystem {
	private animatronics: Animatronic[];
	private cameraLength: number; // the number of cameras, gives more control

	public async setup(cameraLength: number) {
		this.cameraLength = cameraLength;
		this.animatronics = [
			new Animatronic("Freddy"),
			new Animatronic("Chica"),
			new Animatronic("Bonnie")
		];

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


		// jumpscares
		this.animatronics[FREDDY].addJumpscare(await ImageUtils.loadImageFromUrl("images/animatronics/Freddy/jumpscare.png"));
		this.animatronics[BONNIE].addJumpscare(await ImageUtils.loadImageFromUrl("images/animatronics/Bonnie/jumpscare.png"));
		this.animatronics[CHICA].addJumpscare(await ImageUtils.loadImageFromUrl("images/animatronics/Chica/jumpscare.png"));

		// debugging

		console.log(this.animatronics);
	}

	// testing only
	public moveAnimatronic(animatronicIndex: number) {
		let animatronicCameraIndex: number = this.animatronics[animatronicIndex].cameraIndex;
		this.animatronics[animatronicIndex].cameraIndex = (animatronicCameraIndex + 1);
		if (this.animatronics[animatronicIndex].cameraIndex > this.cameraLength - 1) 
			this.animatronics[animatronicIndex].attack();

	}

	public getAnimatronics() {
		return this.animatronics;
	}

	public getAnimatronic(animatronicIndex) {
		return this.animatronics[animatronicIndex];
	}


	public renderAnimatronic(ctx: CanvasRenderingContext2D, animatronicIndex: number) {
		this.animatronics[animatronicIndex].render(ctx);
	}
}