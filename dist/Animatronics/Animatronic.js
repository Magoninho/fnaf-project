import Jumpscare from "./Jumpscare.js";
export default class Animatronic {
    constructor(name) {
        this.sprites = [];
        this.cameraIndex = 0;
        this.state = 0;
        this.name = name;
        this.jumpscare = new Jumpscare();
    }
    addSprite(sprite) {
        this.sprites.push(sprite);
    }
    addJumpscare(image) {
        console.log(image);
        this.jumpscare.setup(image);
    }
    render(ctx) {
        if (!this.jumpscare.activated) {
            for (const sprite of this.sprites) {
                if (sprite.cameraIndex == this.cameraIndex) {
                    ctx.drawImage(sprite.image, sprite.x, sprite.y, sprite.width, sprite.height);
                }
            }
        }
        else {
            this.jumpscare.render(ctx);
        }
    }
    attack() {
        this.jumpscare.activate();
    }
}
//# sourceMappingURL=Animatronic.js.map