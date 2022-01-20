import ImageUtils from "../ImageUtils";

export default class AnimatronicSprite {
	public image: HTMLImageElement;
	public cameraIndex: number;
	public x: number;
	public y: number;
	public width: number;
	public height: number;

	constructor(animatronicSpriteInfo: AnimatronicSpriteInfo) {
		this.cameraIndex = animatronicSpriteInfo.cameraIndex;
		this.image = animatronicSpriteInfo.image;
		this.x = animatronicSpriteInfo.x;
		this.y = animatronicSpriteInfo.y;
		this.width = animatronicSpriteInfo.width;
		this.height = animatronicSpriteInfo.height;
	}
}