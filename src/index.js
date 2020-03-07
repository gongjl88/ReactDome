import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import TodoList from './ReactDux';
import store from './store/RDindex'

// all in js
//import Style from './style';
//import Antd from './Antd';
//  Provider 都可以获取 store的内容
const App = (
    <Provider store={store}>
        <TodoList />
    </Provider>
);


ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
