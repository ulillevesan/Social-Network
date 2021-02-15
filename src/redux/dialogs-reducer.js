const updateNewMessage="UPDATE-MESSAGE-TEXT"
const sendNewMessage="SEND-MESSAGE-TEXT"
let InitialState={
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
}

const DialogsReducer = (state =InitialState,action) => {
    switch (action.type){
    case updateNewMessage:{
        return{...state,newDialogText:action.body} 
      }
    case sendNewMessage:{
      let body=state.newDialogText
      return{...state,
        newDialogText:"",
        md:[...state.md,{id:6,message:body}],
      }
}
    default: return state;
      }
}
export default DialogsReducer