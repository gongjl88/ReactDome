// React虚拟DOM

# 真实DOM组成
1. state 数据
2. JSX 模板
3. 数据+模板 结合，生成真实的DOM,来显示
4. state 发生改变
4. 数据+模板,生成真是的DOM,替换原始的DOM

# 缺陷
第一次生成了一个完整的DOM片段
第二次生成了一个完整的DOM片段
第二次的DOM替换第一次的DOM，非常耗性能

1.state 数据
2. JSX 模板
3. 数据+模板 结合，生成真实的DOM,来显示
4. state 发生改变
5. 数据+模板,生成真是的DOM,不直接替换原始的DOM
6. 新的DOM(DoucumentFragment) 和原始的DOM 做对比,找差异
7. 找出input框发生的变化
8. 只用新的DOM中的input元素，替换掉老的DOM中的input元素

# 缺陷
## 性能提升的不明显

1. state 数据
2. JSX 模板
3. 数据+模板 结合，生成真实的DOM,来显示
4. <div id='abc'<span>hello word</span></div>
5. 生成的虚拟DOM (虚拟DOM就是一个JS对象，用它来描述真实的DOM)
['DIV',{id:'abc'},['span',{},'hello word']]
6. state 发生改变
7. 生成新的虚拟DOM 数据+模板 生成新的虚拟DOM (极大的提升了性能)
['DIV',{id:'abc'},['span',{},'bye bye']]
8. 比较原始虚拟DOM和新的虚拟DOM的区别 找到区别是state的内容
9. 直接操作DOM，改变span中的内容
