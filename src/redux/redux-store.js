import { combineReducers, createStore } from "redux";
import DialogsReducer from './dialogs-reducer'
import PostReducer from './post-reducer'
import UsersReducer from './user-reducer'
let reducers = combineReducers({
    DialogsPage:DialogsReducer,
    PostPage:PostReducer,
    UsersPage:UsersReducer,
})

let store = createStore(reducers);
export const addNewPostTextCreator= (text,tittle) => ({type:"UPDATE-POST-TEXT",ChangeText:text,ChangeTittle:tittle})
export const updateNewMessageCreator= (text) => ({type:"UPDATE-MESSAGE-TEXT",body:text})
export const sendNewMessageCreator= () => ({type:"SEND-MESSAGE-TEXT"})
window.store=store;

export default store;