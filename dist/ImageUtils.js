export default class ImageUtils {
    static loadImageFromUrl(url) {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => {
                resolve(img);
            };
            img.src = url;
        });
    }
}
//# sourceMappingURL=ImageUtils.js.map