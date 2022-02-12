var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Button from "../Button.js";
import ImageUtils from "../ImageUtils.js";
import Map from "../Map.js";
import Static from "../Static.js";
import * as Constants from "../Constants.js";
import Input from "../Input.js";
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
        return __awaiter(this, void 0, void 0, function* () {
            this.animatronicSystem = animatronicSystem;
            yield this.animatronicSystem.setup(this.cameras.length);
            // console.log(this.animatronicSystem.getAnimatronics()[0])
        });
    }
    updateCameras() {
        for (const camera of this.cameras) {
            camera.clear();
            camera.udpate();
        }
        for (const animatronic of this.animatronicSystem.getAnimatronics()) {
            let animatronicCameraIndex = animatronic.cameraIndex % this.cameras.length;
            this.cameras[animatronicCameraIndex].addAnimatronic(animatronic);
            this.cameras[animatronicCameraIndex].udpate();
        }
    }
    setupButtons(canvas) {
        let buttonInfo = {
            button0: {
                innerText: "CAM0",
                x: 989,
                y: 306
            },
            button1: {
                innerText: "CAM1",
                x: 980,
                y: 360
            },
            button2: {
                innerText: "CAM2",
                x: 870,
                y: 413
            },
            button3: {
                innerText: "CAM3",
                x: 1216,
                y: 400
            }
        };
        for (let c = 0; c < this.getCameras().length; c++) {
            const currentButton = buttonInfo[`button${c}`];
            const btn = new Button(currentButton.innerText, currentButton.x, currentButton.y, 50, 35);
            // setting the first camera to have button enabled
            if (this.currentCamera == c)
                btn.setClicked(true);
            this.buttons.push(btn);
        }
        for (let b = 0; b < this.buttons.length; b++) {
            let btn = this.buttons[b];
            canvas.addEventListener("click", (evt) => {
                let mousePos = Input.getMousePos(canvas, evt);
                if (btn.isInside(mousePos)) {
                    btn.click((function () { this.setCamera(b); }.bind(this))); // adding event to button
                    // uncheking all buttons before checking the current one
                    for (let i = 0; i < this.buttons.length; i++) {
                        this.buttons[i].setClicked(false);
                    }
                    btn.setClicked(true);
                    document.getElementById("camera-change-audio").load();
                    document.getElementById("camera-change-audio").play();
                }
            });
        }
    }
    render(ctx) {
        for (const animatronic of this.animatronicSystem.getAnimatronics()) {
            if (animatronic.jumpscare.activated) {
                animatronic.render(ctx);
                return;
            }
        }
        this.cameras[this.currentCamera].render(ctx);
        this.map.render(ctx);
        ctx.drawImage(this.playback, -50, -50, Constants.WIDTH + 70, Constants.HEIGHT + 70);
        this.staticAnimation.update();
        this.staticAnimation.render(ctx);
        for (const button of this.buttons) {
            button.render(ctx);
        }
    }
    setCamera(cameraIndex) {
        this.currentCamera = cameraIndex;
    }
    getCameras() {
        return this.cameras;
    }
}
//# sourceMappingURL=CameraSystem.js.map