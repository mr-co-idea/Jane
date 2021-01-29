import { get as __get } from '../utils/index.js'

export class Widget {
	constructor(dom) {
		this.DOM = __get(dom);
		this.$pointer = {};
	}

	//接收数据 *
	accept(data, prop) {
		if (prop) {
			this.$pointer[prop] = data;
		} else {
			this.$pointer = data;
		}
	}
	//接收消息 *
	receive(state) {
	}
} 