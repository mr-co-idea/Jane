/**
 * 通过id获取dom
 * @param {string} DOM 节点id
 */
export const get = (DOM) => {
	return document.getElementById.call(document, DOM)
}