function initView(semanticModel) {
	let _html = ``;
	if (!semanticModel) return _html;
	for (let item in semanticModel) {
		_html += `<${item}>${semanticModel[item].text || ''}${initView(semanticModel[item].child)}</${item}>`;
	};
	return _html;
};


export {
	initView
}