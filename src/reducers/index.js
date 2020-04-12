import { combineReducers } from 'redux'
import question from './question'
import user from './user'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'
export default combineReducers({
    authedUser,
    question,
    user,
    loadingBar:loadingBarReducer
})