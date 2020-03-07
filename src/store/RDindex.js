import { createStore } from 'redux';
import reducer from './RdReducer';
const store = createStore(
    reducer
);
export default store;