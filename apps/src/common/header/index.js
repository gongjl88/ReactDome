import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeaderWrapper, LogoWapper, Nav, NavItem, Search, Addition, Button, SearchWrpper, SearchInfo, SearchInfoTitle, SearRich, SerachInfoItem, SearchInfoList } from './style.js';
import { CSSTransition } from 'react-transition-group';

import { actionCreators } from './store';
import { Link } from 'react-router-dom';
import { actionCreate as loginAction } from '../../pages/login/store'
class Header extends Component {
    getListArea = () => {
        const { mouseIn, focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, handlechangeitem } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SerachInfoItem key={newList[i]}>{newList[i]}</SerachInfoItem>
                )
            }

        }


        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                    <SearRich onClick={() => handlechangeitem(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe665;</i>
                            换一批
                    </SearRich>
                        <SearchInfoList>

                            {pageList}
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused, handleInputFocus, handleInputonBlur, list, login, logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <LogoWapper />
                </Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        login ? <NavItem className='right' onClick={logout}>退出</NavItem> :
                            <Link to='/login'> <NavItem className='right'>登录</NavItem></Link>
                    }

                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrpper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <Search className={focused ? 'focused' : ''}
                                onFocus={() =>
                                    handleInputFocus(list)
                                }
                                onBlur={handleInputonBlur}
                            />
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe641;</span>
                        {this.getListArea(focused)}
                    </SearchWrpper>
                </Nav>
                <Addition>
                    <Link to="/Write">
                        <Button className='writting'>
                            <span className="iconfont">&#xe6e5;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

}



const mapStateToProps = (state) => {
    return {
        //focused: state.get('header').get('focused')
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        totalPage: state.getIn(['header', 'totalPage']),
        login: state.getIn(['login', 'login'])
    }
}

const mapSDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputonBlur() {
            dispatch(actionCreators.searchBlur());
        }, handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        }, handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        }, handlechangeitem(page, totalPage, spin) {
            //console.log(spin.style.transform);
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            console.log(originAngle);
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';



            if (page < totalPage) {
                dispatch(actionCreators.changeitem(page + 1));
            } else {
                dispatch(actionCreators.changeitem(1));
            }
        }, logout() {
            dispatch(loginAction.logout());
        }
    }
}

export default connect(mapStateToProps, mapSDispathToProps)(Header);