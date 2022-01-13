import * as Constants from "../Constants.js";
export default class Camera {
    constructor(cameraNum, image) {
        this.animatronics = []; // animatronics in camera
        this.cameraNumber = cameraNum;
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
    udpate() {
        switch (this.cameraNumber) {
            // IF CAMERA 0
            case 0:
                if (!this.hasAnimatronic("Freddy") &&
                    !this.hasAnimatronic("Bonnie") &&
                    !this.hasAnimatronic("Chica")) {
                    console.log("asdf");
                    this.spriteRow = 6;
                }
                else if (this.hasAnimatronic("Freddy") &&
                    !this.hasAnimatronic("Bonnie") &&
                    this.hasAnimatronic("Chica")) {
                    this.spriteRow = 2;
                }
                else if (this.hasAnimatronic("Freddy") &&
                    this.hasAnimatronic("Bonnie") &&
                    !this.hasAnimatronic("Chica")) {
                    this.spriteRow = 3;
                }
                else if (this.hasAnimatronic("Freddy") &&
                    !this.hasAnimatronic("Bonnie") &&
                    !this.hasAnimatronic("Chica")) {
                    this.spriteRow = 4;
                }
                else if (this.hasAnimatronic("Freddy") &&
                    this.hasAnimatronic("Bonnie") &&
                    this.hasAnimatronic("Chica")) {
                    let randomState = Math.floor(Math.random() * 2);
                    this.spriteRow = randomState;
                }
                break;
            // IF CAMERA 1
            case 1:
                if (!this.hasAnimatronic("Freddy") &&
                    !this.hasAnimatronic("Bonnie") &&
                    !this.hasAnimatronic("Chica")) {
                    this.spriteRow = 0;
                }
                else if (!this.hasAnimatronic("Freddy") &&
                    this.hasAnimatronic("Bonnie") &&
                    !this.hasAnimatronic("Chica")) {
                    this.spriteRow = 1;
                }
                else if (!this.hasAnimatronic("Freddy") &&
                    !this.hasAnimatronic("Bonnie") &&
                    this.hasAnimatronic("Chica")) {
                    this.spriteRow = 3;
                }
                else if (this.hasAnimatronic("Freddy") &&
                    !this.hasAnimatronic("Bonnie") &&
                    !this.hasAnimatronic("Chica")) {
                    this.spriteRow = 5;
                }
                break;
            // IF CAMERA 2
            case 2:
                if (!this.hasAnimatronic("Bonnie")) {
                    this.spriteRow = 0;
                }
                else if (this.hasAnimatronic("Bonnie")) {
                    this.spriteRow = 3;
                }
                break;
            // IF CAMERA 3
            case 3:
                if (!this.hasAnimatronic("Freddy") &&
                    !this.hasAnimatronic("Chica")) {
                    this.spriteRow = 0;
                }
                else if (!this.hasAnimatronic("Freddy") &&
                    this.hasAnimatronic("Chica")) {
                    this.spriteRow = 2;
                }
                else if (this.hasAnimatronic("Freddy") &&
                    !this.hasAnimatronic("Chica")) {
                    this.spriteRow = 3;
                }
                break;
            default:
                break;
        }
    }
    render(ctx) {
        ctx.drawImage(this.image, 0, this.spriteRow * 720, Constants.WIDTH, Constants.HEIGHT, 0, 0, Constants.WIDTH, Constants.HEIGHT);
        // ctx.drawImage(this.image, 0, 0, Constants.WIDTH, Constants.HEIGHT);
        // console.log(this.animatronics)
        // TODO: render animatronics
        // for (const animatronic of this.animatronics) {
        // 	animatronic.render(ctx);
        // }
    }
}
//# sourceMappingURL=Camera.js.map