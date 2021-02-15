import './App.css';
import React from 'react';
import Header from './component/Header/Header.jsx';
import Main from './component/Main/Main.jsx';
import UsersContainer from './component/UsersSearch/UsersContainer'
import CreatePostContainer from './component/CreatePost/CreatePostContainer';
import MessageContainer from "./component/Message/MessageContainer"
import { BrowserRouter, Route } from 'react-router-dom';
const App= ()=> {
  return (<BrowserRouter><div>
    <img alt="" src="data:image/jpeg;base64,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" className="background-profile"/>
  <div className="app-wrapper">
    <Header/>
    <div className="Content">
    <Main/>
    <div className="Inner">
    <Route path="/Post" render={() => <CreatePostContainer/>}/>
    <Route path="/Message" render={() => <MessageContainer/>}/>
    <Route path="/Users" render={() =><UsersContainer/>}/>
    </div>
    </div>
    </div>
      </div>
      </BrowserRouter>);
}
export default App;
