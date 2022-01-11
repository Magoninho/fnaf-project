var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class CameraSystem {
    constructor() {
        this.currentCamera = 0; // camera index
    }
    setup(cameras) {
        return __awaiter(this, void 0, void 0, function* () {
            this.cameras = cameras;
        });
    }
    render() {
        this.cameras[this.currentCamera].render();
    }
    setCamera(cameraIndex) {
        this.currentCamera = cameraIndex;
    }
    getCameras() {
        return this.cameras;
    }
}
//# sourceMappingURL=CameraSystem.js.map