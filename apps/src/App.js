import React from 'react';
import Header from './common/header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'

import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (

    <Provider store={store}>

      <BrowserRouter>
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/Login' exact component={Login}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
        <Route path='/Write' exact component={Write}></Route>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
