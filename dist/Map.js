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
export default class Map {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.image = yield ImageUtils.loadImageFromUrl("images/other/map.png");
        });
    }
    render(ctx) {
        ctx.drawImage(this.image, Constants.WIDTH - 400, Constants.HEIGHT - 400, 400, 400);
    }
}
//# sourceMappingURL=Map.js.map