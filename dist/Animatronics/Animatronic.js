import Jumpscare from "./jumpscares/Jumpscare.js";
export default class Animatronic {
    constructor(name) {
        this.sprites = [];
        this.cameraIndex = 0;
        this.name = name;
        this.jumpscareObj = new Jumpscare();
    }
    addSprite(sprite) {
        this.sprites.push(sprite);
    }
    addJumpscare(image) {
        console.log(image);
        this.jumpscareObj.setup(image);
    }
    render(ctx) {
        if (!this.jumpscareObj.activated) {
            for (const sprite of this.sprites) {
                if (sprite.cameraIndex == this.cameraIndex) {
                    ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
                }
            }
        }
        else {
            this.jumpscareObj.render(ctx);
        }
    }
    jumpscare() {
        this.jumpscareObj.activate();
    }
}
//# sourceMappingURL=Animatronic.js.map