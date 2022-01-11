import * as Constants from "../Constants.js";
export default class Camera {
    constructor(image) {
        this.animatronics = []; // animatronics in camera
        this.image = image;
    }
    addAnimatronic(animatronic) {
        this.animatronics.push(animatronic);
    }
    clear() {
        this.animatronics = [];
    }
    hasAnimatronic(name) {
        for (const a of this.animatronics) {
            if (a.name == name) {
                return true;
            }
            else {
                continue;
            }
        }
        return false;
    }
    render(ctx) {
        ctx.drawImage(this.image, 0, 0, Constants.WIDTH, Constants.HEIGHT);
        // console.log(this.animatronics)
        // TODO: render animatronics
        for (const animatronic of this.animatronics) {
            animatronic.render(ctx);
        }
    }
}
//# sourceMappingURL=Camera.js.map