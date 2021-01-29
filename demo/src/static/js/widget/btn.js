import { get as __get } from '../utils/index.js'
//可对外改变state
export const Btn = {
	DOM: __get('btn'),
	$pointer: {},
	//接收数据 *
	accept(data, prop) {
		if (prop) {
			this.$pointer[prop] = data;
		} else {
			this.$pointer = data;
		}
		this.click();
	},
	//接收消息 *
	receive(state) {
		const code = state === 'finished';
		this.render(code);
	},
	render(code) {
		const classList = this.DOM.classList;
		if (code) {
			classList.remove('run');
			classList.add('clear');
			this.DOM.innerText = '清空';
		} else {
			classList.remove('clear');
			classList.add('run');
			this.DOM.innerText = '运行'
		};
	},
	click(state) {
		this.DOM.onclick = e => {
			if (this.$pointer?.state === 'finished') {
				this.$pointer.state = 'original';
			} else if (this.$pointer?.state === 'change' || this.$pointer?.state === 'original') {
				this.$pointer.state = 'finished';
			};
		};
	}
}

//* 代表约束项