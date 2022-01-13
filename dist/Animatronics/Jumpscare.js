var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as Constants from "../Constants.js";
export default class Jumpscare {
    constructor() {
        this.row = 0;
        this.activated = false;
    }
    setup(image) {
        return __awaiter(this, void 0, void 0, function* () {
            this.image = image;
            this.rows = Math.floor(this.image.height / 720);
        });
    }
    activate() {
        document.getElementById("jumpscare-audio").play();
        document.getElementById("ambience").pause();
        this.activated = true;
    }
    update() {
        this.row = (this.row + 1) % this.rows;
    }
    render(ctx) {
        this.update();
        ctx.drawImage(this.image, 0, (this.row * 722) + 4, Constants.WIDTH, Constants.HEIGHT, 0, 0, Constants.WIDTH, Constants.HEIGHT);
    }
}
//# sourceMappingURL=Jumpscare.js.map