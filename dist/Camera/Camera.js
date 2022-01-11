export default class Camera {
    constructor(image) {
        this.image = image;
    }
    addAnimatronic(animatronic) {
    }
    hasAnimatronic(name) {
        for (const a of this.animatronics) {
            if (a.name == name) {
                return true;
            }
            else {
                continue;
            }
        }
        return false;
    }
    render() {
        const img = document.getElementById("image");
        img.src = this.image.src;
        const p = document.getElementById("camera-name");
        p.innerText = this.name;
        // TODO: render animatronics
    }
}
//# sourceMappingURL=Camera.js.map