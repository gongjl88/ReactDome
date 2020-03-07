const defaultStare = {
    inputVaule: 'helloword',
    list: []
}

export default (state = defaultStare, action) => {
    if (action.type === 'changeinputvalue') {
        const newstate = JSON.parse(JSON.stringify(state))
        newstate.inputVaule = action.value;
        return newstate;
    }
    if (action.type === 'Add_item') {
        const newstate = JSON.parse(JSON.stringify(state))
        newstate.list.push(newstate.inputVaule);
        newstate.inputVaule = '';
        return newstate;
    }
    if (action.type === 'del_item') {
        const newstate = JSON.parse(JSON.stringify(state))
        newstate.list.splice(action.value, 1)
        return newstate;
    }
    return state
}