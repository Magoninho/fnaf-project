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


		this.animatronics[BONNIE].addSprite({
			cameraIndex: 0,
			image: await ImageUtils.loadImageFromUrl("images/animatronics/Bonnie/camera0/bonnie.png"),
			x: 0,
			y: 0,
			width: 1280,
			height: 720
		});

		this.animatronics[BONNIE].addSprite({
			cameraIndex: 1,
			image: await ImageUtils.loadImageFromUrl("images/animatronics/Bonnie/camera1/bonnie.png"),
			x: 761.6,
			y: 0,
			width: 192,
			height: 720
		});

		this.animatronics[CHICA].addSprite({
			cameraIndex: 1,
			image: await ImageUtils.loadImageFromUrl("images/animatronics/Chica/camera1/chica.png"),
			x: 414.4,
			y: 0,
			width: 139.2,
			height: 720
		});


		// jumpscares
		this.animatronics[FREDDY].addJumpscare(await ImageUtils.loadImageFromUrl("images/animatronics/Freddy/jumpscare.png"));
		this.animatronics[BONNIE].addJumpscare(await ImageUtils.loadImageFromUrl("images/animatronics/Bonnie/jumpscare.png"));
		this.animatronics[CHICA].addJumpscare(await ImageUtils.loadImageFromUrl("images/animatronics/Chica/jumpscare.png"));

		// debugging

		console.log(this.animatronics);
	}

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