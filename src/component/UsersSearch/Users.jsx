import * as axios from 'axios';
import React from 'react'
import b from './Users.module.css'
class Users extends React.Component {
  componentDidMount(){
    // this.props.setUsers([{id:1,name:"Вадим",game:"Rainbow six siege",location:"Steam/vadim",follow:false,clan:"Top",
    // img:"data:image/jpeg;base64,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"},
    // {id:2,name:"Влад",game:"League of Legends",location:"Riot/furbulg",follow:true,clan:"Top",
    // img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
    // {id:3,name:"Сер-гей",game:"Minecraft",location:"Mojang/sergo4817",follow:false,clan:"Top",
    // img:"https://vjoy.cc/wp-content/uploads/2020/10/75aa0962a32b83008568dc8473e78d07.png"},
    // {id:4,name:"Вова",game:"Resident Evil 6",location:"Steam/vasilisochka",follow:true,clan:"Top",
    // img:"https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"}])
    // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.PageSize}`).then(response => this.props.setUsers(response.data.items))
    }
    onChangePage(p){
    this.props.setPage(p)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.PageSize}`).then(response => this.props.setUsers(response.data.items))
    }
    render(){
    let PageCount=Math.ceil(this.props.totalCount/this.props.PageSize)
    let pages = []
    for(let i=1;i<=PageCount;i++){
        pages.push(i);
    }
    return(<div><div className={b.pageAll}>{pages.map(p => <h5 onClick={()=> this.onChangePage(p)} className={this.props.currentPage===p?b.numPageClick:b.numPage}>{p}</h5>)}</div>
{this.props.users.map(u => {return(
    
<div className={b.users}>
<div><img src={u.img} alt="" className={b.img}/></div>
<div className={b.wrapperInfUser}><div className={b.game}><span className={b.spanInf}>Игрок в:</span>{u.game},<span className={b.spanInf}>клан:</span>{u.clan}</div>
<div className={b.name}><span className={b.spanInf}>Имя:</span>{u.name}</div>
<div className={b.location}><span className={b.spanInf}>Главная платформа/ник:</span>{u.location}</div>
<div className={b.followed}>{u.follow?
<button className={b.followbutton} onClick={()=>{this.props.unfollow(u.id)}}>Отписаться</button>:
<button className={b.followbutton} onClick={() => {this.props.follow(u.id)}}>Подписаться</button>}</div>
</div>
</div>

)
}   
    
    
    )}
    </div>)

    }
}
export default Users