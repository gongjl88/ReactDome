import { Change_Input_value, Add_Todo_Item, Del_Todo_Item, INIT_LIST_Action, GET_INIT_LIST } from './actionTypes'
export const getInputChangeAction = (value) => ({
    type: Change_Input_value,
    value
});

export const AddAction = () => ({
    type: Add_Todo_Item,
});

export const DelAction = (index) => ({
    type: Del_Todo_Item,
    index
});

export const initListAction = (data) => ({
    type: INIT_LIST_Action,
    data
});

//异步请求统一管理 thunk
// export const getTodoList = () => {
//     //能够接受到 store的dispatch
//     return (dispatch) => {
//         axios.get('/index/List.json').then((res) => {
//             const data = res.data;
//             const action = initListAction(data);
//             dispatch(action)
//             // console.log(data);

//         })
//     }
// }

export const getInitList = () => ({
    //能够接受到 store的dispatch
    type: GET_INIT_LIST
})
