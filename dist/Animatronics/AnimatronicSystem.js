var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BONNIE, CHICA } from "../Constants.js";
import ImageUtils from "../ImageUtils.js";
import Animatronic from "./Animatronic.js";
import AnimatronicSprite from "./AnimatronicSprite.js";
export default class AnimatronicSystem {
    setup(cameraLength) {
        return __awaiter(this, void 0, void 0, function* () {
            this.cameraLength = cameraLength;
            this.animatronics = [
                new Animatronic("Freddy"),
                new Animatronic("Chica"),
                new Animatronic("Bonnie")
            ];
            // TODO: make an interface
            this.animatronics[BONNIE].addSprite(new AnimatronicSprite(0, yield ImageUtils.loadImageFromUrl("images/animatronics/Bonnie/camera0/bonnie.png"), 0, 0, 1280, 720));
            this.animatronics[BONNIE].addSprite(new AnimatronicSprite(1, yield ImageUtils.loadImageFromUrl("images/animatronics/Bonnie/camera1/bonnie.png"), 761.6, 0, 192, 720));
            this.animatronics[CHICA].addSprite(new AnimatronicSprite(1, yield ImageUtils.loadImageFromUrl("images/animatronics/Chica/camera1/chica.png"), 414.4, 0, 139.2, 720));
            // jumpscares
            this.animatronics[BONNIE].addJumpscare(yield ImageUtils.loadImageFromUrl("images/animatronics/Bonnie/jumpscare.png"));
            this.animatronics[CHICA].addJumpscare(yield ImageUtils.loadImageFromUrl("images/animatronics/Chica/jumpscare.png"));
            // debugging
            console.log(this.animatronics);
        });
    }
    // testing only
    moveAnimatronic(animatronicIndex) {
        let animatronicCameraIndex = this.animatronics[animatronicIndex].cameraIndex;
        this.animatronics[animatronicIndex].cameraIndex = (animatronicCameraIndex + 1);
        if (this.animatronics[animatronicIndex].cameraIndex > this.cameraLength - 1)
            this.animatronics[animatronicIndex].jumpscare();
    }
    getAnimatronics() {
        return this.animatronics;
    }
    renderAnimatronic(ctx, animatronicIndex) {
        this.animatronics[animatronicIndex].render(ctx);
    }
}
//# sourceMappingURL=AnimatronicSystem.js.map