var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import ImageUtils from "../ImageUtils.js";
import Animatronic from "./Animatronic.js";
export default class AnimatronicSystem {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            this.animatronics = [
                new Animatronic("Freddy"),
                new Animatronic("Chica"),
                new Animatronic("Bonnie")
            ];
            this.animatronics[0].addSprite(yield ImageUtils.loadImageFromUrl("images/animatronics/freddy.png"));
            this.animatronics[1].addSprite(yield ImageUtils.loadImageFromUrl("images/animatronics/chica.png"));
            this.animatronics[2].addSprite(yield ImageUtils.loadImageFromUrl("images/animatronics/bonnie.png"));
        });
    }
    // testing only
    moveFreddy() {
        this.animatronics[0].cameraIndex++;
    }
    getAnimatronics() {
        return this.animatronics;
    }
    renderAnimatronic(ctx, animatronicIndex) {
        this.animatronics[animatronicIndex].render(ctx);
    }
}
//# sourceMappingURL=AnimatronicSystem.js.map