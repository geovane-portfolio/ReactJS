import { combineReducers } from "redux";
import userReducer from "./userReducer";

export default combineReducers({
    // retira o valoer de name em 'userReducer'
    usuario: userReducer
});