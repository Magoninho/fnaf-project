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
import Camera from "./Camera/Camera.js";
import CameraSystem from "./Camera/CameraSystem.js";
import { BONNIE, CHICA, FREDDY } from "./Constants.js";
import ImageUtils from "./ImageUtils.js";
import * as Constants from "./Constants.js";
export default class Game {
    constructor(canvas) {
        this.cameraSystem = new CameraSystem();
        this.animatronicSystem = new AnimatronicSystem();
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }
    getAnimatronicSystem() {
        return this.animatronicSystem;
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let loading = document.createElement("h1");
            document.body.appendChild(loading);
            loading.innerHTML = "loading cameras...";
            // setting up cameras with images relative to index.html
            yield this.cameraSystem.setup([
                new Camera(0, yield ImageUtils.loadImageFromUrl("images/cameras/camera0.png")),
                new Camera(1, yield ImageUtils.loadImageFromUrl("images/cameras/camera1.png")),
                new Camera(2, yield ImageUtils.loadImageFromUrl("images/cameras/camera2.png")),
                new Camera(3, yield ImageUtils.loadImageFromUrl("images/cameras/camera3.png")),
            ]);
            loading.innerHTML = "loading animatronic system...";
            yield this.cameraSystem.addAnimatronicSystem(this.animatronicSystem);
            this.cameraSystem.getCameras()[0].name = "Lobby";
            this.cameraSystem.getCameras()[1].name = "Corredor";
            this.cameraSystem.setupButtons(this.canvas);
            this.cameraSystem.setCamera(0);
            // TEMP
            let btnFreddy = document.createElement("button");
            btnFreddy.innerHTML = "move freddy";
            btnFreddy.addEventListener("click", () => {
                this.cameraSystem.animatronicSystem.moveAnimatronic(FREDDY);
                this.cameraSystem.updateCameras();
                this.debugText(`${this.animatronicSystem.getAnimatronic(FREDDY).name} -> CAMERA ${this.animatronicSystem.getAnimatronic(FREDDY).cameraIndex}`);
            });
            document.body.appendChild(btnFreddy);
            let btnBonnie = document.createElement("button");
            btnBonnie.innerHTML = "move Bonnie";
            btnBonnie.addEventListener("click", () => {
                this.cameraSystem.animatronicSystem.moveAnimatronic(BONNIE);
                this.cameraSystem.updateCameras();
                this.debugText(`${this.animatronicSystem.getAnimatronic(BONNIE).name} -> CAMERA ${this.animatronicSystem.getAnimatronic(BONNIE).cameraIndex}`);
            });
            document.body.appendChild(btnBonnie);
            let btnChica = document.createElement("button");
            btnChica.innerHTML = "move Chica";
            btnChica.addEventListener("click", () => {
                this.cameraSystem.animatronicSystem.moveAnimatronic(CHICA);
                this.cameraSystem.updateCameras();
                this.debugText(`${this.animatronicSystem.getAnimatronic(CHICA).name} -> CAMERA ${this.animatronicSystem.getAnimatronic(CHICA).cameraIndex}`);
            });
            document.body.appendChild(btnChica);
            this.cameraSystem.updateCameras();
            document.getElementById('ambience').play();
            document.body.removeChild(loading);
            // this.cameraSystem.animatronicSystem.moveFreddy();
            // improvised game loop
            setInterval(() => {
                this.update();
                this.render();
            }, 1000 / 30);
        });
    }
    debugText(text) {
        let p = document.createElement("p");
        p.innerText = text;
        document.body.appendChild(p);
    }
    getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    update() {
    }
    render() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, Constants.WIDTH, Constants.HEIGHT);
        this.cameraSystem.render(this.ctx);
    }
    setAnimatronicSystem(animatronicSystem) {
        this.animatronicSystem = animatronicSystem;
    }
    getCameraSystem() {
        return this.cameraSystem;
    }
    setCameraSystem(cameraSystem) {
        this.cameraSystem = cameraSystem;
    }
}
//# sourceMappingURL=Game.js.map