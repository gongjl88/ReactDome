import axios from 'axios';
import * as constants from './constants'
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id)
            .then((res) => {
                const data = res.data.data[id - 1];
                const action = {
                    type: constants.CHANGE_DETAIL,
                    data: data
                }
                dispatch(action);
            })
            .catch(() => {

            })
    }
}