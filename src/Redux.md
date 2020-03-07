# Redux Flow


reducer（state，action）：当前的state和action，返回新的state；
store：存放state的对象；
state：唯一的state值，通过store.getState()获取；
Action：普通对象，用来表示即将改变state。action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作;
Dispatch(action):往store发送action；
Action Create:创建action的函数



# 图书馆工作流程
ReactComponents 借书的用户
||
⮟
ActionCreators 借书的类型
||
⮟
Store 图书管理员
||
⮟
Reducers 记录本 

