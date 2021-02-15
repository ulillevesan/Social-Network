const addPost= "ADD-POST"
const addNewPostText="UPDATE-POST-TEXT"
let InitialState={
  posts:[{tittle:"Заголовок",text:"Мой первый пост!"}],
  newPostText:"",
  newPostTittle:""
  }
const PostReducer = (state = InitialState,action) => {
    switch (action.type) {
      case addPost:{ 
      let newPost ={
          tittle:state.newPostTittle,
          text:state.newPostText
      }
      return{...state,
      posts:[...state.posts,newPost],
      newPostText:" ",
      newPostTittle:"",
      }
    }
      case addNewPostText:
        let stateCopy = {...state}
        stateCopy.newPostTittle=action.ChangeTittle;
        stateCopy.newPostText=action.ChangeText;
        return stateCopy;
      default: return state;
      }
}
export default PostReducer