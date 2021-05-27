import React , {Component} from 'react'
import {css , cx} from 'emotion'

const K = css`
.img_rigth{
  height: 100px;
  width: 100px;
  margin:20px auto 0
}
    .Name{
      width:fit-content;
      margin:auto;
      color: #000;
      font-size: 20px;
        font-weight: bold;
        font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;
    }
    .Active{
      color: rgba(0, 0, 0, .40);
      font-size: 12px;
      font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;
      width:fit-content;
      margin:auto
    }
    .img{
        border-radius: 50px; 
       
      }
    
    
   
`

class Sidebar_rigth extends Component{
    render(){
        const {src , name , active } = this.props;
        return(
            <div className={cx(K)}> 
     
          <div className="img_rigth"><img className="img" src={src} height="100" width="100"/></div>
           <div className="Name">{name}</div>
           <div className="Active">{active}</div>
          </div>
            
        );
    }
}
export default Sidebar_rigth;
