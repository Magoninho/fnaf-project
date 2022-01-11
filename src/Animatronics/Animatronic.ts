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
		// TODO
		ctx.drawImage(this.sprite, 50, 50, 100, 200);
	}

	public jumpscare() {
		console.log(`${this.name}: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`);
	}
}