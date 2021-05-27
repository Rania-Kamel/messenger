import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css, cx } from 'emotion'
import { years, days, months } from "../database"
import Select from "./Select"
const I = css`

.sign_up{
  background: transparent;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.quick_easy{
  text-align:center;
  margin: 0;
}
  
.signup_titel{
  font-weight: 750;
  color: #1c1e21;
  font-family: SFProDisplay-Bold, Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 38px;
  text-align:center;
  margin: 0;
}
  
}
.icon_x{
  margin-top:30px
}
.userName{
  display: flex;
  justify-content: space-between;
}

.first_name_input , .address_input , .new_password_input , .surspanname_input{
  border-radius: 5px;
  border: 1px solid #ccd0d5;
  padding-left: 10px;
  font-family: SFProDisplay-Regular, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 16px;
  background-color:#f5f6f7 ;
  color:#8d949e;
  width:calc(100% - 14px);
  height: 30px;
  margin-top: 10px;
}
.surspanname_input , .first_name_input{
  width:200px ;
}
.new_password_input{
  margin-bottom: 15px;
}


.small_title{
  margin: 0 10px;
  color: #606770;
  font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  
}
.select_div{
    display: grid;
    grid-template-columns: repeat(3 , 138px);
    grid-gap: 16px;
}
select{
  border-radius: 4px;
  font-size:15px;
  font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
  font-weight: normal;
  height:38px;
}

.grnger_div{
  display: grid;
  grid-template-columns: repeat(2 , 216px);
  grid-gap:16px
}

.gen{
  border: 1px solid black;
  line-height: 36px;
  padding-left: 10px;
  border-radius: 4px;
  font-size:15px;
  font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
  font-weight: normal;
  label{
    height: 100%;
    width: 85%;
    display: inline-block;
  }
}

.gen_radio{
  width: 20px;
  float: right;
  margin: 12px 4px;
}



.paragraph_button{
  color: #777;
  font-size: 11px;
  width: auto;
  margin-left: 10px;
}
.signup_button{
  background: none;
  background-color: #00a400;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  height: 36px;
  width:195px;
  margin: 10px auto 30px;
  display: block;  
}

form{
  padding:16px;
  width: 448px
}
`


class Signup extends Component {

  render() {

    return (
      <div className={cx(I)}>
        <div className="Signup">
          <div className="sign_up">
            <p className="signup_titel">Sign Up</p>
            <p className="quick_easy">It's quick and easy.</p>
            <form>
              <div className="userName">
                <input className="first_name_input" type="text" name="f_n" placeholder="First name" autoComplete="off" />
                <input className="surspanname_input" type="text" name="l_n" placeholder="Surspanname" autoComplete="off" />
              </div>
              <div>
                <input className="address_input"
                  type="text"
                  name="address"
                  placeholder="Mobile number or email address"
                  autoComplete="off"
                />
              </div>
              <div>
                <input className="new_password_input"
                  type="password"
                  name="password"
                  placeholder="New password"
                  autoComplete="off"
                />
              </div>
              <h6 className="small_title">Date of birth </h6>
              <div className="select_div">
                <Select dateArray={days} disapled_option="day" />
                <Select dateArray={months} disapled_option="month" />
                <Select dateArray={years} disapled_option="year" />
              </div>
              <h6 className="small_title">Gender</h6>
              <div className="grnger_div">
                <span className="gen">
                  <label for="Female" >Female</label>
                  <input id="Female" className="gen_radio" type="radio" name="gen" /></span>
                <span className="gen">
                  <label for="male" >Male</label>
                  <input id="male" className="gen_radio" type="radio" name="gen" /></span>
              </div>
              <p className="paragraph_button">By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
              <button className="signup_button">Sign Up</button>
            </form>
          </div>
          <Link to="/" className="login_link">login</Link>
        </div>
      </div>
    );
  }
}

export default Signup;