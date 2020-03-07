import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style';

import { actionCreate } from './store'

import { connect } from 'react-redux';

import List from './component/list';
import Recommend from './component/Recommend';
import LWriterist from './component/Writer';
import Topic from './component/Topic';

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4894/23ecc55accf5c6a6c9910be966c125853d1f04a5.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <LWriterist></LWriterist>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop data-content="回到顶部" className="content" onClick={this.handleScrollTop}>▲</BackTop> : null
                }

            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeSrcollTopShow);
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeSrcollTopShow);
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreate.getHomInfo();
        dispatch(action);
    },
    changeSrcollTopShow() {
        const documentWidth = document.documentElement.scrollTop;
        //console.log(documentWidth);
        const action = actionCreate.changeScroll(documentWidth);
        dispatch(action);
    }

})

export default connect(mapState, mapDispatch)(Home);