var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ImageUtils from "./ImageUtils.js";
import * as Constants from "./Constants.js";
export default class Static {
    constructor() {
        this.row = 0;
    }
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.texture = yield ImageUtils.loadImageFromUrl("images/other/static.png");
        });
    }
    update() {
        this.row = (this.row + 1) % 7;
    }
    render(ctx) {
        ctx.globalAlpha = 0.25;
        ctx.drawImage(this.texture, 0, this.row * 720, Constants.WIDTH, Constants.HEIGHT, 0, 0, Constants.WIDTH, Constants.HEIGHT);
        ctx.globalAlpha = 1.0;
    }
}
//# sourceMappingURL=Static.js.map