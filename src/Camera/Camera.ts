import Animatronic from "../Animatronics/Animatronic.js";

export default class Camera {
	public name: string;
	public image: HTMLImageElement;
	public animatronics: Animatronic[];

	constructor(image: HTMLImageElement) {
		this.image = image;
	}

	public addAnimatronic(animatronic: Animatronic) {

	}

	public hasAnimatronic(name: string): boolean {
		for (const a of this.animatronics) {
			if (a.name == name) {
				return true;
			} else {
				continue;
			}
		}
		return false;
	}

	public render() {
		const img: HTMLImageElement = document.getElementById("image") as HTMLImageElement;
		img.src = this.image.src;

		const p: HTMLElement = document.getElementById("camera-name");
		p.innerText = this.name;

		// TODO: render animatronics
	}
}