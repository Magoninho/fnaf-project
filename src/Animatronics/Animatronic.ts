import AnimatronicSprite from "./AnimatronicSprite.js";
import Jumpscare from "./jumpscares/Jumpscare.js";

export default class Animatronic {
	public name: string;
	public sprites: AnimatronicSprite[] = [];
	public cameraIndex: number = 0;

	public jumpscareObj: Jumpscare;

	constructor(name: string) {
		this.name = name;
		this.jumpscareObj = new Jumpscare();

	}

	public addSprite(sprite: AnimatronicSprite) {
		this.sprites.push(sprite);
	}

	public addJumpscare(image: HTMLImageElement) {
		console.log(image);
		this.jumpscareObj.setup(image);
	}

	public render(ctx: CanvasRenderingContext2D) {

		if (!this.jumpscareObj.activated) {
			for (const sprite of this.sprites) {
				if (sprite.cameraIndex == this.cameraIndex) {
					ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
				}
			}
		} else {
			this.jumpscareObj.render(ctx);
		}
	}


	public jumpscare() {
		this.jumpscareObj.activate();
		
	}
}