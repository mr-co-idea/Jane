//工具集

/**
 * 通过id获取dom
 * @param {string} DOM 节点id
 */
export const get = (DOM) => {
	return document.getElementById.call(document, DOM)
}


/**
 * 代理对象
 * @param {object} obj 目标对象
 * @param {string} property 属性
 * @param {function} callback 回调函数
 */
export const listen = (obj, callback) => new Proxy(obj, {
	get() {
		//通过映射进行操作
		return Reflect.get(...arguments);
	},
	set(target, prop, newVal, receiver) {
		if (newVal !== target[prop]) {
			const result = [prop, newVal, target[prop], target, receiver];
			callback(...result)
		};
		return Reflect.set(...arguments)
	},
})

