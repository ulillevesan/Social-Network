import { connect } from "react-redux"
import {updateNewMessageCreator} from "../../redux/redux-store"
import {sendNewMessageCreator} from "../../redux/redux-store"
import Message from './Message'
let mapStateToProps =(state) => {
    return{
    DialogsPage:state.DialogsPage
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
    SendMessage:() => {dispatch(sendNewMessageCreator())},
    ChangeTextMessage:(text) => {dispatch(updateNewMessageCreator(text))}
    }
    }
const MessageContainer=connect(mapStateToProps,mapDispatchToProps)(Message);
export default MessageContainer