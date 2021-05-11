import { combineReducers } from 'redux'

import userReducer from '../redux/Account/account-reducer.js'

export default combineReducers({
    user: userReducer
})