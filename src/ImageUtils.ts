export default class ImageUtils {
	public static loadImageFromUrl(url: string): Promise<HTMLImageElement> {
		return new Promise(resolve => {
			const img = new Image();
			img.onload = () => {
				resolve(img);
			}
			img.src = url;
		});
	}
}