import axios from 'axios';

import * as constants from './constants'

import { fromJS } from 'immutable'

const ChangeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
})


const addHomeList = (result, nextpage) => ({
    type: constants.ADD_HOME_LIST,
    list: fromJS(result),
    nextpage
})

export const getHomInfo = (page) => {
    return (dispatch) => {
        axios.get('/api/home.json?page' + page)
            .then((res) => {
                const result = res.data.data;
                dispatch(ChangeHomeData(result, page + 1));
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page)
            .then((res) => {
                const result = res.data.data;
                dispatch(addHomeList(result, page + 1));
            })
    }

}

export const changeScroll = (documentWidth) => ({
    type: constants.CHANGE_SCROLL,
    width: documentWidth
})