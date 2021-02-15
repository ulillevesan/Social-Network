import React from 'react'
import s from "./CreatePost.module.css"

const CreatePost=(props) =>{
        debugger;
        let newPostText=React.createRef()
        let newPostTittle=React.createRef()
let addPost = ()=>{
        props.addPost()
      
}
let onPostChange= () =>{
        let text=newPostText.current.value
        let tittle=newPostTittle.current.value
        props.onPostChange(tittle,text)
}
let PostElem = props.posts.map(p =><div className={s.Posts} key={p.id}><div className={s.Tittle}>{p.tittle}</div><div className={s.Text}>{p.text}</div></div>)
return(<div>
<div className={s.Ask}>
        <div className={s.formPost}>
        <div className={s.askT}><input type="text" required className={s.tittle} ref={newPostTittle} onChange={onPostChange} value={props.newPostTittle}/></div>
        <div className={s.askQ}><textarea required className={s.text} ref={newPostText} onChange={onPostChange} value={props.newPostText}></textarea></div>
        <button className={s.btnPost} onClick={addPost}>Send</button>
        </div>
        </div>
        <div className={s.FlexPost}> 
        {PostElem}</div>
        </div>)

}
export default CreatePost