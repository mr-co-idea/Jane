//简2.0
//嵌套式开发

class Node {
	constructor({ tagName, attrs, children } = { tagName: 'div', attrs: {}, children: [] }) {
		this.tagName = tagName
	}
}


//节点创建
function createNode(params) {
	//typeof params ---> object
	//typeof params ---> function
	//typeof params ---> string
	let result = null;
	switch (typeof params) {
		case 'object':
			break;
		case 'function':
			break;
		case 'string':
			result = createTextNode(params);
			break;
		default:
			throw new Error('参数不能为空');
			break;
	};
	return result;
};
//创建DOM节点
function createDOM({ tagName, attrs, children } = Node) {
	const DOM = document.createElement(param.tagName);
}

//创建文本节点
function createTextNode(param) {
	return document.createTextNode(param);
};

//创建函数