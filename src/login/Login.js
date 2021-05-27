import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css, cx } from 'emotion'

const R = css`

margin: auto;
max-width: 420px;
margin-top: calc(50vh - 210px);

.title{
  margin: 5px 0px;
  text-align: center;
}

.messenger_image{
      width:100px;
      height: 100px;
      display: block;
      margin: auto;
}

.login_input{
   width:95%;
   height: 35px;
   margin:20px auto 0 auto;
   display: block;
   border-radius: 30px;
   border:2px solid rgb(240, 238, 238);
   padding-left: 15px;
}

.login_button{
  background-color: #0084ff;
  border: 1px solid #0084ff;
  border-radius: 24px;
  color: #fff;
  display: block;
  font-family: Calibre, Helvetica Neue, Segoe UI, Helvetica, Arial, Lucida Grande, sans-serif;
  font-size: 19px;
  font-weight: 500;
  height: 40px;
  line-height: 19px;
  margin:10px 5px;
  padding: 2px 20px 0;
  width: auto;
}
.chat_link{
  color: #fff;
  text-decoration: none;
}

.link{
  color: rgba(0,0,0,.4);
  font-size: 15px;
  font-weight: 500;
  margin: 15px 5px; 
  display: block;
}


`
class Login extends Component {

  render() {

    return (
      <div className={cx(R)}>
        <img className="messenger_image" src="https://tse1.mm.bing.net/th?id=OIP.qoOCEls-L11Ta0tSeGrv6AHaHa&amp;pid=Api&amp;P=0&amp;w=300&amp;h=300" />
        <h1 className="title">Messenger</h1>
        <p className="title">Sign in to getStarted</p>
        <form>
          <input className="login_input" type="text" name="name" placeholder="Email address or Phone number" autoComplete="off" />
          <input className="login_input" type="password" name="password" placeholder="Password" autoComplete="off" />
          <button className="login_button"><Link className="chat_link" to="/chat">Log in</Link></button>
        </form>
        <Link className="link" to="/pas">Forgotten your password ? </Link>
        <Link className="link" to="/signup">Create new account</Link>
      </div>
    );
  }
}

export default Login;
