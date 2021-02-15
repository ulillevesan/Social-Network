import React from 'react'
import CreatePost from './CreatePost'
import { connect } from "react-redux"
let mapStateToProps = (state) => {
        return{
                newPostTittle:state.PostPage.newPostTittle,
                newPostText:state.PostPage.newPostText,
                posts:state.PostPage.posts
        }
}
let mapDispatchToProps = (dispatch) => {
        return{
        onPostChange:(tittle,text) =>{
                        let action={type:"UPDATE-POST-TEXT",ChangeTittle:tittle,ChangeText:text}
                        dispatch(action)
                },
        addPost:() => {dispatch({type:"ADD-POST"})}
        }
}
let CreatePostContainer = connect(mapStateToProps,mapDispatchToProps)(CreatePost);
export default CreatePostContainer