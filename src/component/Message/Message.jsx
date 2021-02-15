import React from 'react'
import s from "./Message.module.css"
import { NavLink } from 'react-router-dom'
const Message= (props) =>{
    debugger;
    const DialogComponent=(props) => {
        let idDialog="/Message/"+props.id;
        debugger;
         let nameDialog=props.name;
        return(<div className={s.DialogItem + ' ' + s.active}>
            <NavLink activeClassName={s.active} to={idDialog}>{nameDialog}</NavLink>
        </div>)
    }
    const MessagesComponent=(props) => {
         return(<div className={s.message}>{props.message}
         </div>
    
         )
    }
    const ChangeTextMessage = (e) => {
    let text = e.target.value;
    props.ChangeTextMessage(text)
    }
    let MessagesElem=props.DialogsPage.md.map(m =>   <MessagesComponent message={m.message} id={m.id}/>)
    let DialogElem= props.DialogsPage.dd.map(d => <DialogComponent name={d.names} id={d.id}/>)
    return(<div className={s.dialogs}>
        <div className={s.Dialog}>
            {DialogElem}
        </div>
        <div className={s.messages}>
       <div>{MessagesElem}</div>
       <div className={s.formMessage}>
           <div className={s.messageText}><textarea value={props.DialogsPage.newDialogText} placeholder="Введите сообщения" onChange={ChangeTextMessage}></textarea></div>
        <div className={s.messageEnter}><button onClick={props.SendMessage} >send</button></div>
        </div>
        </div>
    </div>)
}

export default Message