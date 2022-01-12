import ImageUtils from "../ImageUtils";

export default class AnimatronicSprite {
	public image: HTMLImageElement;
	public cameraIndex: number;
	public x: number;
	public y: number;
	public width: number;
	public height: number;

	constructor(cameraIndex: number, image: HTMLImageElement, x: number, y: number, width: number, height: number) {
		this.cameraIndex = cameraIndex;
		this.image = image;
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
}