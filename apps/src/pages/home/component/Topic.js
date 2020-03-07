import React, { PureComponent } from 'react';

import { TopicWrapper, TopicItem } from '../style'


import { connect } from 'react-redux'

class Topic extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>

                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic'
                                    src={item.get('imgUrl')}
                                    alt=""
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }

                <a href="#">更多热门专题 ></a>
            </TopicWrapper>
        )
    }

}

// const mapSDispath = (dispatch) => {
//     return {

//     }
// }

const mapState = (state) => ({
    list: state.get('home').get('topicList')
})
export default connect(mapState, null)(Topic);