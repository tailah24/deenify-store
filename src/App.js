import React from 'react';
import './App.css';
import Homepage from './pages/homepage'
import ShopPage from './pages/shop-page/shop.js'
import { Switch, Route } from 'react-router-dom'
import Header from './component/Header/header.js'
import UserAccount from './pages/Account/userAccount';
import { auth } from './firebase/firebase.utils.js'



class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  
  
render() {
  return (
    <div >
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signin' component={UserAccount}/>
      </Switch>
    </div>
  );
}
}
export default App;
