import React, { Component } from 'react';
import 'antd/dist/antd.css'
import TodolistUI from './TodolistUI'
import store from './store/index';
import { getInputChangeAction, AddAction, DelAction, getInitList } from './store/actionCreators'
class Antd extends Component {
    constructor(props) {
        super(props);
        //拿去Store数据
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.deleteTitem = this.deleteTitem.bind(this);
        //监控store的改变
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <TodolistUI inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleStoreChange={this.handleStoreChange}
                handleBtnClick={this.handleBtnClick}
                deleteTitem={this.deleteTitem}
            />

        )
    }

    componentDidMount() {

        //使用thunk异步处理
        // const action = getTodoList();
        // store.dispatch(action);

        //使用getInitList 处理异步
        const action = getInitList();
        store.dispatch(action);



        //请求移动到 actionCreators中请求
        // axios.get('/index/List.json').then((res) => {
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action)
        //     //console.log(action);
        // })
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        //提交数据到store
        store.dispatch(action);
        //console.log(e.target.value)
    }
    handleStoreChange() {

        this.setState(store.getState());
        //console.log(this.state.inputValue)
    }
    handleBtnClick() {
        const action = AddAction();
        store.dispatch(action);
    }
    deleteTitem(index) {
        const action = DelAction(index)
        store.dispatch(action);
    }
}

export default Antd;