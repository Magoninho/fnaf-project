import AnimatronicSprite from "./AnimatronicSprite.js";

export default class Animatronic {
	public name: string;
	public sprites: AnimatronicSprite[] = [];
	public cameraIndex: number = 0;

	constructor(name: string) {
		this.name = name;
	}

	public addSprite(sprite: AnimatronicSprite) {
		this.sprites.push(sprite);
	}

	public render(ctx: CanvasRenderingContext2D) {
		// let x: number = 0;
		// let y: number = 0;
		// let width: number = 50;
		// let height: number = 80;
		// if (this.name == "Freddy") {
		// 	if (this.cameraIndex == 0) {
		// 		x = 500;
		// 		y = 200;
		// 		width = 300;
		// 		height = 600;
		// 	} else if (this.cameraIndex == 1) {
		// 		x = 300;
		// 		y = 60;
		// 		width = 400;
		// 		height = 700;
		// 	}
		// } else if (this.name == "Chica") {
		// 	if (this.cameraIndex == 1) {
		// 		x = 414.4;
		// 		y = 0;
		// 		width = 139.2;
		// 		height = 720;
		// 	} else return;
		// } else if (this.name == "Bonnie") {
		// 	if (this.cameraIndex == 0) {
		// 		x = 0;
		// 		y = 0;
		// 		width = 1280;
		// 		height = 720;
		// 	} else if (this.cameraIndex == 1) {
		// 		x = 0;
		// 		y = 0;
		// 		width = 1280;
		// 		height = 720;
		// 	}
		// }

		for (const sprite of this.sprites) {
			if (sprite.cameraIndex == this.cameraIndex) {
				ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
			}
		}

		// ctx.drawImage(this.sprite, x, y, width, height);
	}


	public jumpscare() {
		console.log(`${this.name}: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`);
	}
}