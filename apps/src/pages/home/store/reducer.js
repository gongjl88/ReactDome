
import { fromJS } from 'immutable';

import * as constants from './constants'
//immutable.js  不可改变的

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            console.log(action.topicList);
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        case constants.ADD_HOME_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextpage
            });
        case constants.CHANGE_SCROLL:
            return (action.width > 400) ? state.set('showScroll', true) : state.set('showScroll', false)
        default:
            return state;
    }
}