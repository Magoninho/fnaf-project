export default class Animatronic {
	public name: string;
	public sprite: HTMLImageElement;
	public cameraIndex: number = 0;

	constructor(name: string) {
		this.name = name;
	}

	public addSprite(sprite: HTMLImageElement) {
		this.sprite = sprite;
	}

	public render(ctx: CanvasRenderingContext2D) {
		let x: number = 0;
		let y: number = 0;
		let width: number = 50;
		let height: number = 80;
		if (this.name == "Freddy") {
			if (this.cameraIndex == 0) {
				x = 500;
				y = 200;
				width = 300;
				height = 600;
			} else if (this.cameraIndex == 1) {
				x = 300;
				y = 60;
				width = 400;
				height = 700;
			}
		}

		ctx.drawImage(this.sprite, x, y, width, height);
	}

	public jumpscare() {
		console.log(`${this.name}: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`);
	}
}