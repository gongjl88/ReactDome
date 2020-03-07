import React, { Component } from 'react';
import { DetailWrapper, Header, BigDiv, Content } from './style'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { actionCreate } from './store'
class Detail extends Component {
    render() {
        //console.log(this.props.match.params.id);
        //console.log(this.props.location.ser);
        return (
            <BigDiv>
                <DetailWrapper>
                    <Header>
                        {this.props.Title}
                    </Header>
                    <Content dangerouslySetInnerHTML={{ __html: this.props.Content }}>

                    </Content>
                </DetailWrapper>
            </BigDiv>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreate.getDetail(id));
    }
})

const mapState = (state) => ({
    Title: state.getIn(['detail', 'Title']),
    Content: state.getIn(['detail', 'Content'])
})

export default connect(mapState, mapDispatch)(withRouter(Detail));