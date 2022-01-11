export default class Buttons {
    constructor(innerText) {
        this.buttonText = innerText;
        // creating the button
        this.buttonEl = document.createElement("button");
        this.buttonEl.innerText = this.buttonText;
        document.body.appendChild(this.buttonEl);
    }
}
//# sourceMappingURL=Buttons.js.map