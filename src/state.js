import DialogsReducer from './redux/dialogs-reducer'
import PostReducer from './redux/post-reducer'
let store = {
_state:{
PostPage:{
posts:[{tittle:"Заголовок",text:"Мой первый пост!"}],
newPostText:"",
newPostTittle:""
},
DialogsPage:{
  dd:[
  {names:"Dima", id:"2"},
  {names:"Yulia", id:"3"},
  {names:"Vlad", id:"4"}
],
md:[
  {message:"Where are you", id:"1"},
  {message:"How are you", id:"2"},
  {message:"who are you", id:"3"},
  {message:"Hi", id:"4"}],
  newDialogText:"",
},
},
Getstate() {
  return this._state;
},
_rerenderEntireTree() {
  console.log("change");
},
dispatch(action){
  this._state.DialogsPage=DialogsReducer(this._state.DialogsPage,action)
  this._state.PostPage=PostReducer(this._state.PostPage,action)

  this._rerenderEntireTree(this._state)
},
subscribe (observer){
  this._rerenderEntireTree=observer
},
}
export const addPostCreator= () => ({type:"ADD-POST"})
export const addNewPostTextCreator= (text,tittle) => ({type:"UPDATE-POST-TEXT",ChangeText:text,ChangeTittle:tittle})
export const updateNewMessageCreator= (text) => ({type:"UPDATE-MESSAGE-TEXT",body:text})
export const sendNewMessageCreator= () => ({type:"SEND-MESSAGE-TEXT"})
window.store=store;
export default store
