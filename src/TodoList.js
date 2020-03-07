import React, { Component, Fragment } from 'react';
import Test from './Test'
import TodoItem from './TodoItem'
//import axios from 'axios'
import './style.css'
class TodoList extends Component {
    //构造函数  constructor最优先执行
    constructor(props) {
        // 调用父类的函数
        super(props);
        //组件的状态
        this.state = {
            inputValue: '',
            list: ['学习Vue', '学习React']
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);

    }
    // 组件即将被挂载到页面的时刻自动执行
    componentDidMount() {
        //请求放在这里
        // axios.get('/api/todoList')
        //     .then(() => {
        //         alert('succ');
        //     })
        //     .catch(() => {
        //         alert('err');
        //     })
        console.log('componentWilldidMount');
    }
    //挂载完成后执行
    componentWillMount() {

        console.log('componentWillMount');
    }
    //组件更新之前会执行
    // shouldComponentUpdate() {
    //     console.log('shouldComponentUpdate');
    //     return true;
    // }
    //组件更新之前会执行，但是他在shouldComponentUpdate之后
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }


    render() {
        console.log('render');
        return (
            <Fragment>
                {/* 注释 */}
                <label htmlFor="insertArea">提交内容</label><input id="insertArea" className="input"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleBtnClick}>提交</button>
                <ul>
                    {this.getTodoItem()}
                </ul>
                <Test content={this.state.inputValue}>
                </Test>
            </Fragment>
        )
    }
    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                < TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.del.bind(this)}
                />
            )
        })
    }

    handleInputChange(e) {
        //console.log(e.target);
        //console.log(this);
        //使用setState为组件赋值
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value + "23"
        }))

    }
    handleBtnClick() {
        this.setState((PrevState) => ({
            list: [...PrevState.list, PrevState.inputValue],
            inputValue: ''
        }), () => {
            console.log(this.state.list)
        })

    }
    del(index) {
        // console.log(index);
        //state 不允许做任何改变

        this.setState((PrevState) => {
            const list = [...PrevState.list];
            list.splice(index, 1);
            return { list }
        });
    }
}

export default TodoList;