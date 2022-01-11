export default class Button {

	public static createButtonElement(innerText: string): HTMLButtonElement {

		// creating the button
		let btn = document.createElement("button");
		btn.innerText = innerText;
		return btn;
	}
}