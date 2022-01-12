import Input from "./Input.js";

export default class Button {
	private innerText: string;
	private x: number;
	private y: number;
	private width: number;
	private height: number;
	private event: Function;
	private clicked: boolean

	constructor(innerText: string, x: number, y: number, width: number, height: number) {
		this.innerText = innerText
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.clicked = false;
	}


	public static createButtonElement(innerText: string): HTMLButtonElement {

		// creating the button
		let btn = document.createElement("button");
		btn.innerText = innerText;
		return btn;
	}

	public isInside(mousePos) {
		return mousePos.x > this.x && mousePos.x < this.x+this.width && mousePos.y < this.y+this.height && mousePos.y > this.y
	}

	public click(event: Function) {
		event();
	}

	public setClicked(clicked: boolean) {
		this.clicked = clicked;
	}


	public update() {
		
	}

	public render(ctx: CanvasRenderingContext2D) {
		ctx.fillStyle = this.clicked? "green" : "grey"
		ctx.fillRect(this.x, this.y, this.width, this.height);
		ctx.font = '16px monospace';
		ctx.fillStyle = "white";
		ctx.fillText(this.innerText, this.x, this.y + 16);
	}
}