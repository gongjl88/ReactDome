import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'
class Style extends Component {
    constructor(props) {
        super();
        this.state = {
            show: true,
            list: []
        }
        this.handleToggole = this.handleToggole.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }
    
    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <CSSTransition
                                    in={this.state.show}
                                    timeout={1000}
                                    classNames='fade'
                                    unmountOnExit
                                    onEntered={(el) => {
                                        el.style.color = 'red'
                                    }}
                                    // 首次加载也有动画效果
                                    appear={true}
                                >
                                    <div key={index}>{item}</div>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
                <button onClick={this.handleAddItem}>toggole</button>
            </Fragment>
        )
    }
    handleToggole() {
        this.setState({
            show: this.state.show ? false : true
        })
    }
    handleAddItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
    }
}
export default Style