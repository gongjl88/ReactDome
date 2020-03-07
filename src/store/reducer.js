import { Change_Input_value, Add_Todo_Item, Del_Todo_Item, INIT_LIST_Action } from './actionTypes'
const defaultState = {
    inputValue: '123',
    list: [1, 2]
}
//可以接收state 不能修改
export default (state = defaultState, action) => {
    switch (action.type) {
        case Change_Input_value:
            const newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        case Add_Todo_Item:
            const newStates = JSON.parse(JSON.stringify(state));
            newStates.list.push(newStates.inputValue);
            newStates.inputValue = "";
            return newStates;
        case Del_Todo_Item:
            const delStates = JSON.parse(JSON.stringify(state));
            delStates.list.splice(action.index, 1);
            return delStates;
        case INIT_LIST_Action:
            const axiosdata = JSON.parse(JSON.stringify(state));
            axiosdata.list = action.data;
            return axiosdata;
        default:
            break;
    }
    //console.log(state,action.value);

    return state;
}

