import * as consttants from './consttants'
import { fromJS } from 'immutable'
import axios from 'axios'
export const searchFocus = () => ({
    type: consttants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: consttants.SEARCH_BULR
});

const change_List = (data) => ({
    type: consttants.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json')
            .then((res) => {
                const data = res.data.data;
                dispatch(change_List(data));
            })
            .catch(() => {
                console.log('error');
            })
    }
}


export const mouseEnter = () => ({
    type: consttants.MOUSE_ENTER
})

export const mouseLeave = () => ({
    type: consttants.MOUSE_LEAVE
})

export const changeitem = (page) => ({
    type: consttants.CHANGE_ITEM,
    page
})

