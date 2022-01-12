export default class Input {
    // https://stackoverflow.com/a/17130415/8200685
    static getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
}
//# sourceMappingURL=Input.js.map