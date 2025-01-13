import { combineReducers } from 'redux';


import loginReducer from './login_reducer';
import userReducer from './user_reducer';


const rootReducer = combineReducers({
    auth: loginReducer,
    user: userReducer

})

export default rootReducer;