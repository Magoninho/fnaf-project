export default class Animatronic {
    constructor(name) {
        this.cameraIndex = 0;
        this.name = name;
    }
    addSprite(sprite) {
        this.sprite = sprite;
    }
    render(ctx) {
        // TODO
        ctx.drawImage(this.sprite, 50, 50, 100, 200);
    }
    jumpscare() {
        console.log(`${this.name}: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`);
    }
}
//# sourceMappingURL=Animatronic.js.map