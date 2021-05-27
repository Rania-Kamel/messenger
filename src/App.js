import React, { Component } from 'react';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import Login from './login/Login'
import Signup from './Signup/Signup'
import Password from './password/Password'
import Chat from './Chat/Chat'


class App extends Component {
 
  render(){
    return (
    <BrowserRouter>
    <div className="App">
    <Switch>
    <Route exact path="/" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <Route path="/pas" component={Password}/>
     <Route path="/chat" component={Chat}/>
    </Switch>
   
    </div>
    </BrowserRouter>
  );
    }
}

export default App;