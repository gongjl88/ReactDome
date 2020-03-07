
import { fromJS } from 'immutable';

import * as constants from './constants'
//immutable.js  不可改变的
const defaultState = fromJS({
    Title: '',
    Content: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                Title: fromJS(action.data.Title),
                Content: fromJS(action.data.Content),
            })
        default:
            return state;
    }
}