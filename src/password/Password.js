import React from 'react' 

import {css , cx} from 'emotion'

const A=css`
.top_div{
    height: 75px;
    background-color: #3b5998;
    background-image: linear-gradient(#4e69a2, #3b5998 50%);
    border-bottom: 1px solid #133783;
    margin: 0 auto;
    padding-top: 13px;
    display: flex;
}
.header_left{
    width:800px;
    margin-left: 80px;
}
.password{
    margin-left: 80px;
    color: white;
    font-family: inherit;
    font-size: 14px;
}
.email{
    margin-left: 15px;
    color: white;
    font-family: inherit;
    font-size: 14px;
}
.password_input , .email_input{
    margin-left: 15px;
    width: 150px;
}
.password_button{
    margin-left: 3px;
    background-color: #4267b2;
    border:1px solid #29487d;
    color: #fff;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
    padding: 2px 6px;
    text-align: center;
    
}
.titel_left{
   color:white;
   margin: 17px 0 0 50px;
}
.account_link{
    display: block;
    color: #9cb4d8;;;
    font-size: 13px;
    font-weight: 500;
    margin:5px 0 5px 190px;
    text-decoration: none;
}
.container{
    height: 300px;
    background-color: #e9ebee;
    padding-top:80px
}
.center_div{
    width: 555px;
    border-radius: 4px;
    height: 170px;
    background-color: white;
    margin: auto;
    display: block;
    border: 1px solid #ccc;
    
}
.center_div_titel{
    padding-left: 20px;
    color: #162643;
    font-size: 17px;
  
}
.rnter_email_phone{
    margin:10px 60px 0 70px;
    font-size: 13px;
}
.mobile_input{
    display: block;
    margin: 6px 0 35px 0;
    width: 260px;
    height: 18px;
}
.center_div_button{
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    height: 37px;

}
.search{
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
    background-color: #4267b2;
    border:1px solid #29487d;
   margin-right: 7px;
}
.cancel{
  height: 22px;
    color:rgb(49, 54, 61);
    border: 1px solid #ccc;
}
.search_cancel_div{
    
    margin:5px 0 0 420px;
}
hr{
    width:510px;
    
}
@media (max-width: 1125px){
    .header_left , .titel_left{
        margin-left: 10px;
    }
    .header_left{
        width:650px
    }
}
@media (max-width: 1072px){
    .header_left , .titel_left{
        margin-left: 0px;
    }
    .header_left{
        width:580px
    }
}
@media (max-width: 990px){
    .header_left , .titel_left{
        margin-left: 0px;
    }
    .header_left{
        width:500px
    }
}
@media (max-width: 915px){
    .header_left , .titel_left{
        margin-left: 0px;
    }
    .header_left{
        width:400px
    }
}
@media (max-width: 815px){
    .header_left , .titel_left{
        margin-left: 0px;
    }
    .header_left{
        width:300px
    }
}
@media (max-width: 715px){
    .header_left , .titel_left{
        margin-left: 0px;
    }
    .header_left{
        width:200px
    }
}
@media (max-width: 615px){
    .header_left , .titel_left{
        margin-left: 0px;
    }
    .header_left{
        width:220px
    }
    .password_button{
        margin-left: 14px;
    }
    
}
@media (max-width: 530px){
    .header_left , .titel_left{
        margin-left: 0px;
   
    }
    .header_left{
        display: grid;
        grid-template-columns: 200px 400px;
    }
}


`

const Password = () =>{
    return(
        <div className={cx(A)} >
    <div className="Pas">
         <div className="top_div">
             <div className="header_left"><h1 className="titel_left">Messenger</h1></div>
          <form>
              <sapn className="email">Email or phone</sapn>
              <span className="password">Password</span><br/>
              <input className="email_input" type="text" name="email" autoComplete="off"/>
              <input className="password_input" type="password" name="password" autoComplete="off"/>
              <button className="password_button">Log in</button>
              <a href="/account" className="account_link">Forgetten account?</a>
          </form>
        </div>
        <div className="container">
            <div className="center_div">
                <h2 className="center_div_titel">Find Your Account</h2><hr/>
                <div className="rnter_email_phone">Please enter your email address or phone number to search for your account.
                <input className="mobile_input" typ="number" name="mobile" placeholder="Mobile number"/>
                </div>
                <div className="center_div_button">
                    <div className="search_cancel_div">  
                  <button className="search">Search</button>
                  <button className="cancel">Cancel</button>
                  </div>
                </div>
            </div>
        </div>
        </div>
     </div>

    );
}
export default Password;