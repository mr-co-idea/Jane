import { get as __get } from '../utils/index.js'
// 输入框两种改变
//离开文本框，改变state状态为初始

//可对外改变state

export const Input = {
	DOM: __get('input'),
	$pointer: {},
	//接收数据 *
	accept(data, prop) {
		if (prop) {
			this.$pointer[prop] = data;
		} else {
			this.$pointer = data;
		}
		this.send();
	},
	//获取输入的文本
	receive(state) {
		if (state === 'original') {
			this.DOM.value = null;
			this.$pointer.text = null;
		} else if (state === 'finished') {
			this.$pointer.text = this.DOM.value;
		}
	},
	send() {
		this.DOM.onkeyup = () => {
			this.$pointer.state = 'change';
		};
	}
}