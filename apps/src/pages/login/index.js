import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom'

import { actionCreate } from './store'

import { LoginWrapper, LoginBox, Input, Button } from './style'

class Login extends PureComponent {
    render() {
        const { loginIS } = this.props;
        if (!loginIS) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号：" ref={(input) => { this.account = input }} />
                        <Input placeholder="密码：" type='password' ref={(input) => { this.password = input }} />
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to='/' />
        }

    }
}

const mapDispatch = (dispatch) => ({
    login(accountElem, passwordElem) {
        dispatch(actionCreate.login(accountElem.value, passwordElem.value))
    }
})

const mapState = (state) => ({
    loginIS: state.getIn(['login', 'login'])
})

export default connect(mapState, mapDispatch)(Login);