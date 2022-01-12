export default class Button {
    constructor(innerText, x, y, width, height) {
        this.innerText = innerText;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.clicked = false;
    }
    static createButtonElement(innerText) {
        // creating the button
        let btn = document.createElement("button");
        btn.innerText = innerText;
        return btn;
    }
    isInside(mousePos) {
        return mousePos.x > this.x && mousePos.x < this.x + this.width && mousePos.y < this.y + this.height && mousePos.y > this.y;
    }
    click(event) {
        event();
    }
    update() {
    }
    render(ctx) {
        ctx.fillStyle = "grey";
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.font = '16px monospace';
        ctx.fillStyle = "white";
        ctx.fillText(this.innerText, this.x, this.y + 16);
    }
}
//# sourceMappingURL=Button.js.map