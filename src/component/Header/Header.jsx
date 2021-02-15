import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
const Header= () =>{
    return(<div>
        <header className={s.header}>
      <img src="https://archilab.online/images/1/123.jpg" alt="" className={s.avatar}/>
      <nav className={s.nav}>
        <div className={s.item}><NavLink activeClassName={s.active} to="/Post">Profile</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to="/Message">Messages</NavLink></div>
        <div className={s.item}><NavLink activeClassName={s.active} to="/Users">Users</NavLink></div>
        <div className={s.item}>Music</div>
        <div className={s.item}>Settings</div>
      </nav>
      </header>
      </div>)
}
export default Header;