import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import TodoSaga from './sagas'
// Redux的中间件
// 什么是Redux中间件
// import thunk from 'redux-thunk';


// const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),
// );

//使用 Redux-saga处理异步
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);
//传入存放数据 reducer 
//创建一个store
const store = createStore(
    reducer, enhancer
    //React调试工具  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
sagaMiddleware.run(TodoSaga)
export default store;