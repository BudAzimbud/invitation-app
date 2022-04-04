import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import party from './ReducerParty'
export default combineReducers({
    party,
    form: formReducer
})