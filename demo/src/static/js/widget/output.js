import { Widget } from '../class/widget.js'

export class Output extends Widget {
	constructor(dom) {
		super(dom);
	}

	receive(text) {
		let output = '';
		function print(text) {
			output += `<br>${text}`;
		}
		try {
			eval(text);
		} catch (e) {
			output = e;
		}
		this.DOM.innerHTML = output;
	}
}