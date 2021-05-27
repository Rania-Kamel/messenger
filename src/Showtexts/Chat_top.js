import React, { Component } from 'react'
import { css, cx } from 'emotion'

const S = css` 
height:40px;
margin-bottom: 12px;
display:flex;

.profile{
    display:flex;
    margin: 5px 0 0 15px
  }
  
  
.name_active_chat{
    display:flex;
    flex-direction: column;
    justify-content: center;
      margin: 19px 0 0 10px;
      font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;
      line-height: 1.28
      font-size: 15px;
      font-weight: bold;
  }
  .profile_name_chat{
    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;
      line-height: 1.28;
      margin-top:-8px
  }
  .active_div_chat{
    color: rgba(0, 0, 0, .40);
    font-size: 12px;
    font-weight: normal;
    display:flex;
  }
  .chat_top{
    height:57px ;
    display:flex;
  margin-bottom: 12px;
  }
  .img_chat{
    border-radius: 50px;   
  }
 
`


class Chat_top extends Component {
    
    render() {
        const {src , name , active} = this.props;
        return (
            <div className={cx(S)}>
              
                    <div className="profile">
                        <img className="img_chat" src={src} height="40" width="40" />
                    </div>
                    <div className="name_active_chat">
        <div className="profile_name_chat">{name}</div>
                        <div className="active_div_chat">{active}</div>
                    </div>
                </div>
            
        );
    }
}
export default Chat_top;