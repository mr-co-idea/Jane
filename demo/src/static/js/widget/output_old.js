import { get as __get } from '../utils/index.js'
export const Output = {
	DOM: __get('result'),
	$pointer: {},
	//接收数据 *
	accept(data, prop) {
		if (prop) {
			this.$pointer[prop] = data;
		} else {
			this.$pointer = data;
		}
	},
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
