//中继站
export class RelayStation {
	constructor(data) {
		//行为监控表示符号
		this.identify = Symbol('actionsReflect');
		this.actionsReflect(data);
		//处于监听状态下的行为
		this.actions = data[this.identify];
		//代理数据
		this.proxyData = this.listen(data, this.callback.bind(this));
	}

	//添加行为结构,挂载到原始数据中
	actionsReflect(data) {
		const actionsReflect = {};
		for (let key in data) {
			actionsReflect[key] = [];
		}
		data[this.identify] = actionsReflect;
	}

	//数据代理
	listen(obj, callback) {
		return new Proxy(obj, {
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
	}

	//行为回调
	callback(prop, newVal, oldVal) {
		this.actions[prop].map(({ act }) => {
			act(newVal);
		});
	}

	//包装个体
	pack(individual, prop, selfprop) {
		//prop为要接收信息的属性
		individual.accept?.(this.proxyData, selfprop);
		this.proxyData[this.identify][prop].push({
			act: individual.receive.bind(individual),
			ctx: individual
		});
		return this
	}
}

//需要增加嵌套对象处理
//需增加属性删除或添加后行为结构更新