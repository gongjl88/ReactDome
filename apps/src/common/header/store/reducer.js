import * as consttants from './consttants';

import { fromJS } from 'immutable';

//immutable.js  不可改变的

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case consttants.SEARCH_FOCUS:
            return state.set('focused', true);
        case consttants.SEARCH_BULR:
            return state.set('focused', false);
        case consttants.CHANGE_LIST:
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case consttants.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case consttants.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case consttants.CHANGE_ITEM:
            return state.set('page', action.page)
        default:
            return state;
    }
}