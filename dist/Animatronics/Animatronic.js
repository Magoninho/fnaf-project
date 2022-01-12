export default class Animatronic {
    constructor(name) {
        this.cameraIndex = 0;
        this.name = name;
    }
    addSprite(sprite) {
        this.sprite = sprite;
    }
    render(ctx) {
        let x = 0;
        let y = 0;
        let width = 50;
        let height = 80;
        if (this.name == "Freddy") {
            if (this.cameraIndex == 0) {
                x = 500;
                y = 200;
                width = 300;
                height = 600;
            }
            else if (this.cameraIndex == 1) {
                x = 300;
                y = 60;
                width = 400;
                height = 700;
            }
        }
        ctx.drawImage(this.sprite, x, y, width, height);
    }
    jumpscare() {
        console.log(`${this.name}: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA`);
    }
}
//# sourceMappingURL=Animatronic.js.map