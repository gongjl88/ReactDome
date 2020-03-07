import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./style";
import { GlobalStyleIcon } from "./static/incofont/iconfont";
import App from './App';

ReactDOM.render(<Fragment>
    <GlobalStyleIcon />
    <GlobalStyle />
    <App />
</Fragment>, document.getElementById('root'));


