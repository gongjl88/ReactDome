import React from 'react';
//import store from './store/RDindex';
import { connect } from 'react-redux'

const TodoList = (props) => {
    const { inputVaule, handlnputchangevalue, handledel, handleClick, list } = props;
    return (
        <div>
            <div>
                <input value={inputVaule} onChange={handlnputchangevalue}></input>
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li onClick={() => {
                            handledel(index);
                        }} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}


// class TodoList extends Component {

//     // constructor(props) {
//     //     super(props)
//     //     this.state = store.getState();
//     // }

//     render() {
//         const { inputVaule, handlnputchangevalue, handledel, handleClick, list } = this.props;

//     }
// }



//connect 口诀 connect是连接，组件和store做链接，怎么做链接通过mapStateToProps映射关系做链接 怎么映射 映射到props中


//映射到组件
const mapStateToProps = (state) => {
    return {
        inputVaule: state.inputVaule,
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlnputchangevalue(e) {
            const action = {
                type: 'changeinputvalue',
                value: e.target.value
            }
            //console.log(e.target.value)
            dispatch(action);
        }, handleClick() {
            const action = {
                type: 'Add_item',
            }
            dispatch(action);
        }, handledel(key) {
            const action = {
                type: 'del_item',
                value: key
            }
            dispatch(action);
            //console.log(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);