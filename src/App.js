import React from 'react';
import './App.css';
import Homepage from './pages/homepage'
import ShopPage from './pages/shop-page/shop.js'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './component/Header/header.js'
import UserAccount from './pages/Account/userAccount';
import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'
import { connect } from 'react-redux'
import { setCurrentUser} from './redux/Account/user.actions.js'



class App extends React.Component {

  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
render() {
  return (
    <div >
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route exact path='/signin'  render = {() => this.props.currentUser ? ( <Redirect to='/' />) : ( <UserAccount />) }/>
      </Switch>
    </div>
  );
}
}

const mapStateToProps = ({ user }) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
