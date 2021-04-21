import React from 'react';
import './App.css';
import Homepage from './pages/homepage'
import ShopPage from './pages/shop-page/shop.js'
import { Switch, Route } from 'react-router-dom'
import Header from './component/Header/header.js'


function App() {
  return (
    <div >
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
