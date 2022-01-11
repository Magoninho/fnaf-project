export default class Animatronic {
	public name: string;
	public sprite: HTMLImageElement;
	public cameraIndex: number = 0;

	constructor(name: string) {
		this.name = name;
	}

	public jumpscare() {
		console.log(`${this.name}: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`);
	}
}