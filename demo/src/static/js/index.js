//引入中继站
import { RelayStation } from './class/relaystation.js'
//引入部件
import { Btn, Input, Output } from './widget/index.js'

//原始数据
const originalData = {
	text: '',
	state: 'original'//finished,change
};

//中继站
const relayStation = new RelayStation(originalData);

//包装部件
relayStation.pack(Btn, 'state').pack(Input, 'state').pack(new Output('result'), 'text');