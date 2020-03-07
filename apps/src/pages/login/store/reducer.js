
import { fromJS } from 'immutable';

import * as constants from './constants'
//immutable.js  不可改变的

const defaultState = fromJS({
    login: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.merge({
                login: action.value
            })
        case constants.CHANGE_OUT:
            return state.merge({
                login: action.value
            })
        default:
            return state;
    }
}