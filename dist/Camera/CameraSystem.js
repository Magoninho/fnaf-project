var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Static from "../Static.js";
export default class CameraSystem {
    constructor() {
        this.currentCamera = 0; // camera index
    }
    setup(cameras) {
        return __awaiter(this, void 0, void 0, function* () {
            this.cameras = cameras;
            this.staticAnimation = new Static();
            this.staticAnimation.setup();
        });
    }
    addAnimatronics(animatronicSystem) {
        this.animatronicSystem = animatronicSystem;
        this.animatronicSystem.setup();
        // console.log(this.animatronicSystem.getAnimatronics()[0])
    }
    updateAnimatronics() {
        for (const camera of this.cameras) {
            camera.clear();
        }
        for (const animatronic of this.animatronicSystem.getAnimatronics()) {
            let animatronicCameraIndex = animatronic.cameraIndex;
            this.cameras[animatronicCameraIndex].addAnimatronic(animatronic);
        }
    }
    render(ctx) {
        this.cameras[this.currentCamera].render(ctx);
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