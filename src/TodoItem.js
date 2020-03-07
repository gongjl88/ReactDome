import React, { Component } from 'react';
//属性校验 prop-types
import PorpTypes from 'prop-types'
class TodoItem extends Component {

    constructor(props) {
        //当组件的state或者props发生改变的时候，reader函数会重新执行
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true;
        } else {
            return false
        }
    }
    render() {
        const { content, test } = this.props;
        return (
            //接收父组件的传值
            <div
                onClick={this.handleClick}>
                {content}-{test}
                {/* {content} */}

            </div>
        )
    }

    handleClick() {
        //父组件传递的删除方法
        const { deleteItem, index } = this.props;
        deleteItem(index);
    }
    //一个组件要从父组件接收参数
    //如果这个组件第一次存在父组件中，不会执行
    //如果这个组件之前已经存在于父组件中，才会执行
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }
    //当页面的组件要被移除的时候
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

//参数校验
TodoItem.propTypes = {
    content: PorpTypes.oneOfType([PorpTypes.string, PorpTypes.number]),
    deleteItem: PorpTypes.func,
    index: PorpTypes.number,
    test: PorpTypes.string.isRequired
}

//默认值
TodoItem.defaultProps = {
    test: 'hello word'
}

export default TodoItem