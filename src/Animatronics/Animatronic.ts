import AnimatronicSprite from "./AnimatronicSprite.js";
import Jumpscare from "./Jumpscare.js";

export default class Animatronic {
	public name: string;
	public sprites: AnimatronicSprite[] = [];
	public cameraIndex: number = 0;
	public state: number = 0;

	// TODO: AI (freddy, chica, bonnie)

	public jumpscare: Jumpscare;

	constructor(name: string) {
		this.name = name;
		this.jumpscare = new Jumpscare();

	}

	public addSprite(animatronicSpriteInfo: AnimatronicSpriteInfo) {
		this.sprites.push(new AnimatronicSprite(animatronicSpriteInfo));
	}


	public addJumpscare(image: HTMLImageElement) {
		console.log(image);
		this.jumpscare.setup(image);
	}

	public render(ctx: CanvasRenderingContext2D) {

		if (!this.jumpscare.activated) {
			for (const sprite of this.sprites) {
				if (sprite.cameraIndex == this.cameraIndex) {
					ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
				}
			}
		} else {
			this.jumpscare.render(ctx);
		}
	}


	public attack() {
		this.jumpscare.activate();
		
	}
}