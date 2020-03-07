import React from 'react';
import { Button, Input, List } from 'antd';


//无状态组件 性能高  UI组件来使用
const TodoListUI = (props) => {
    return (
        <div>
            <Input
                value={props.inputValue}
                placeholder="Todo Info"
                style={{ width: '300px', margin: '10px' }}
                onChange={props.handleInputChange}
            />
            <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
            <List
                style={{ marginTop: '10px', width: '400px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={() => { props.deleteTitem(index) }}>{item},{index}
                </List.Item>)}
            />

        </div>
    )
}

//UI组件  容器组件
//class TodoListUI extends Component {
// render() {
//     return (
//         <div>
//             <Input
//                 value={this.props.inputValue}
//                 placeholder="Todo Info"
//                 style={{ width: '300px', margin: '10px' }}
//                 onChange={this.props.handleInputChange}
//             />
//             <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//             <List
//                 style={{ marginTop: '10px', width: '400px' }}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.deleteTitem(index) }}>{item},{index}
//                 </List.Item>)}
//             />

//         </div>
//     )
// }
//}

export default TodoListUI