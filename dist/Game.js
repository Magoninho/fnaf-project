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
import { CHICA } from "./Constants.js";
import ImageUtils from "./ImageUtils.js";
import Input from "./Input.js";
export default class Game {
    constructor(canvas) {
        this.cameraSystem = new CameraSystem();
        this.animatronicSystem = new AnimatronicSystem();
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            // setting up cameras with images relative to index.html
            yield this.cameraSystem.setup([
                new Camera(yield ImageUtils.loadImageFromUrl("images/cameras/camera0.png")),
                new Camera(yield ImageUtils.loadImageFromUrl("images/cameras/camera1.png"))
            ]);
            this.cameraSystem.addAnimatronicSystem(this.animatronicSystem);
            this.cameraSystem.getCameras()[0].name = "Lobby";
            this.cameraSystem.getCameras()[1].name = "Corredor";
            this.setupButtons();
            this.cameraSystem.setCamera(0);
            this.cameraSystem.animatronicSystem.moveAnimatronic(CHICA);
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
        let buttonInfo = {
            button0: {
                innerText: "CAM0",
                x: 994,
                y: 350
            },
            button1: {
                innerText: "CAM1",
                x: 982,
                y: 400
            }
        };
        for (let c = 0; c < this.cameraSystem.getCameras().length; c++) {
            const btnIndex = buttonInfo[`button${c}`];
            const btn = new Button(btnIndex.innerText, btnIndex.x, btnIndex.y, 45, 30);
            this.canvas.addEventListener("click", (evt) => {
                let mousePos = Input.getMousePos(this.canvas, evt);
                if (btn.isInside(mousePos)) {
                    btn.click((function () { this.cameraSystem.setCamera(c); }.bind(this)));
                    btn.setClicked(true);
                    document.getElementById("camera-change-audio").load();
                    document.getElementById("camera-change-audio").play();
                }
                else {
                    btn.setClicked(false);
                    console.log(mousePos);
                }
            });
            this.cameraSystem.addButton(btn);
        }
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
        this.cameraSystem.render(this.ctx);
    }
}
//# sourceMappingURL=Game.js.map