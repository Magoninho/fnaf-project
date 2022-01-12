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
import Map from "../Map.js";
import Static from "../Static.js";
import * as Constants from "../Constants.js";
export default class CameraSystem {
    constructor() {
        this.currentCamera = 0; // camera index
        this.buttons = [];
    }
    setup(cameras) {
        return __awaiter(this, void 0, void 0, function* () {
            this.cameras = cameras;
            this.staticAnimation = new Static();
            yield this.staticAnimation.setup();
            this.map = new Map();
            yield this.map.setup();
            this.playback = yield ImageUtils.loadImageFromUrl("images/other/playback.png");
        });
    }
    addAnimatronicSystem(animatronicSystem) {
        this.animatronicSystem = animatronicSystem;
        this.animatronicSystem.setup(this.cameras.length);
        // console.log(this.animatronicSystem.getAnimatronics()[0])
    }
    updateAnimatronics() {
        for (const camera of this.cameras) {
            camera.clear();
        }
        for (const animatronic of this.animatronicSystem.getAnimatronics()) {
            let animatronicCameraIndex = animatronic.cameraIndex % this.cameras.length;
            this.cameras[animatronicCameraIndex].addAnimatronic(animatronic);
        }
    }
    addButton(button) {
        this.buttons.push(button);
    }
    render(ctx) {
        this.cameras[this.currentCamera].render(ctx);
        this.map.render(ctx);
        ctx.drawImage(this.playback, -50, -50, Constants.WIDTH + 70, Constants.HEIGHT + 70);
        for (const button of this.buttons) {
            button.render(ctx);
        }
        this.staticAnimation.update();
        this.staticAnimation.render(ctx);
    }
    setCamera(cameraIndex) {
        this.currentCamera = cameraIndex;
    }
    getCameras() {
        return this.cameras;
    }
}
//# sourceMappingURL=CameraSystem.js.map