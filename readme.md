# 简 (Jane)
## 前端模块化
### 原由
* 针对前端代码过多碎片，适用于常规但重复的页面
* 框架过于庞大，繁琐
* 过多精力从业务放到基础层
### 概念
* 解耦和耦合
* view：页面模板
* viewModel：视图模型绑定
* model：模型
* action：交互
* function：函数
* server：服务



### 设计思路
* 先有鸡还是先有蛋
* 先有根还是先有枝


**方案一**:按照功能模块划分  ----->成熟模块
#### 组件化（先有鸡后有蛋，先有枝后有根）
* 页面功能块解构----->模块对象
* 模块对象解构------>不变状态，可变状态，行为
* 状态汇聚
* 自上而下

**方案二**：按照行为状态划分  ------>自定义模块
#### 模块化 （先有蛋后有鸡，现有根后有枝）
* 生命树，状态为节点，行为为连接线
* 状态节点挂载页面标签，样式
* 状态分发
* 自下而上

#### type
* 给定的风格样式等
* 可实现直接import引入
#### 未给定type

### 约束
* semanticModel层应该是由function生成
* 大道至简