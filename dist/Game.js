var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import AnimatronicSystem from "./Animatronics/AnimatronicSystem.js";
import Button from "./Button.js";
import Camera from "./Camera/Camera.js";
import CameraSystem from "./Camera/CameraSystem.js";
import { BONNIE } from "./Constants.js";
import ImageUtils from "./ImageUtils.js";
export default class Game {
    constructor(ctx) {
        this.cameraSystem = new CameraSystem();
        this.animatronicSystem = new AnimatronicSystem();
        this.ctx = ctx;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            // setting up cameras with images relative to index.html
            this.cameraSystem.setup([
                new Camera(yield ImageUtils.loadImageFromUrl("images/cameras/camera0.png")),
                new Camera(yield ImageUtils.loadImageFromUrl("images/cameras/camera1.png"))
            ]);
            this.cameraSystem.addAnimatronics(this.animatronicSystem);
            this.cameraSystem.getCameras()[0].name = "Lobby";
            this.cameraSystem.getCameras()[1].name = "Corredor";
            this.setupButtons();
            this.cameraSystem.setCamera(0);
            // this.cameraSystem.animatronicSystem.moveAnimatronic(0);
            this.cameraSystem.animatronicSystem.moveAnimatronic(BONNIE);
            this.cameraSystem.updateAnimatronics();
            // this.cameraSystem.animatronicSystem.moveFreddy();
            // improvised game loop
            setInterval(() => {
                this.update();
                this.render();
            }, 1000 / 30);
        });
    }
    setupButtons() {
        // sistema temporario
        for (let c = 0; c < this.cameraSystem.getCameras().length; c++) {
            const btn = Button.createButtonElement("Camera " + c);
            document.getElementById("buttons").appendChild(btn);
            btn.addEventListener("click", () => {
                this.cameraSystem.setCamera(c);
                document.getElementById("camera-change-audio").load();
                document.getElementById("camera-change-audio").play();
            });
        }
    }
    update() {
    }
    render() {
        this.cameraSystem.render(this.ctx);
        // this.cameraSystem.animatronicSystem.renderAnimatronic(this.ctx, 0);
    }
}
//# sourceMappingURL=Game.js.map