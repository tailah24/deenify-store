import { combineReducers } from 'redux'

import cartReducer from './cart/cart-reducer'

import userReducer from './Account/account-reducer'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
})