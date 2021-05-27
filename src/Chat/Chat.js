import React, { Component } from 'react';
import Showtexts from '../Showtexts/Showtexts.js'
import Addtexts from '../Addtext/Addtexts'
import { css, cx } from 'emotion'
import Profiles from './Profiles'
import Chat_top from '../Showtexts/Chat_top'
import Sidebar_rigth from '../Showtexts/Sidebar_rigth'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom';
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'
import img9 from './images/img9.jpg'
import img10 from './images/img10.jpg'



const M = css`

  display: flex;
  height:100vh;
  overflow: hidden;

.sidebare_left{
  width:25%;
  flex-direction: column;
  max-height: 100%;
  border-right: .0009px solid rgb(219, 216, 216);
}
.left_top_div{
  display:flex;
  justify-content: space-between;
  height:65px;
}
.chat_titel{
  margin:17px 0 0px 7px;
    color: rgba(0, 0, 0, 1);
}
.imag_myprofile{
  margin:15px 0 0px 10px;
  border-radius: 50px;
}
.img_titel{
  display:flex;
}
.setting_div{
margin:0px 20px 0px 0px;
}
.img_seeting{
  align-items: center;
    background-color: rgba(0, 0, 0, .04);
    border-radius: 99px;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    overflow: hidden;
    transition: height .25s, margin-left .25s, width .25s;

}

ul{
  list-style-type: none;
}
.log_out{
  text-decoration:none;
  color: #1c1e21;
  font-size: 15px;

}
.edit_user{
  text-decoration:none;
  color: #1c1e21;
  font-size: 15px;
  margin:0 0 0 -13px
}
.menu{
  position: relative;
}
.submenu{
  position: absolute;
  line-height: 1.28;
  padding-top: 10px;
  margin: -1px 0 0 -5px;
  border-radius: 3px;
  background-color: #fff;
   border: 1px solid rgba(0, 0, 0, .15);
  box-shadow: 0 3px 8px rgba(0, 0, 0, .3);
  width:80px;
  height:200px;
  background-clip: padding-box;
  transition: .3s all;
  display:none;
}
.submenu:before{
  content:"";
  position: absolute;
  height: 0;
  width:0;
  top: -6px;
  left:13px;
  width: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #FFF;
}

.input{
  margin:0 20px 10px 0;
}
.search_input{
  background-color: rgba(0, 0, 0, .04);
 width: 82%;
 border: none;
 font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;
 background-image: url(/rsrc.php/v3/ye/r/8_Lh2-GA2l5.png);
    border-radius: 50px;
    font-size: 14px;
    height: 33px;
    padding:0 0 0 30px;
display:block;
margin:auto;
 
}
.img{
  margin-top:-2px;
  border-radius: 50px;
  
}

.pages{
  max-height:calc(100% - 110px);
  overflow: auto;
 
}

.chat_parent{
  width:50%;
  max-height: 100%;
  background-color: white;
}

.messege{
  height: calc(100% - 115px);
  overflow:auto;
  border-top: .0009px solid rgb(219, 216, 216);
  border-right: .0009px solid rgb(219, 216, 216);
  padding-top:13px;
}

.sidebar_rigth{
  flex-grow: 1;
  max-height: 100%;
  background-color: white;
}
.call_vedio{
  height: 52px;
  width:100%;
  border-bottom:1px solid rgb(219, 216, 216);
  display:flex;
  justify-content: flex-end;
}
.call , .vedio , .information{
  margin:9px 0 0 10px;
  
}
.information{
  margin-right:10px
}

  .action{
    border-top: .0009px solid rgb(219, 216, 216);
    margin-top:18px;
    max-height:calc(100% - 300px) ;
    overflow: auto;
  }
  
h4{
  color: rgba(0, 0, 0, .34);
  font-size: 15px;
  font-weight: bold;
  margin-left: 14px;
}

.more_action_div{
  display:flex;
  justify-content: space-between;
  margin-left:15px;
  padding:0 6px 0 0;
  margin-top:20px
}

.them{
  background-color: rgb(240, 29, 106);
   background-image: linear-gradient(rgb(0, 95, 255) 0%, rgb(146, 0, 255) 50%, rgb(255, 46, 25) 100%);
   border-radius: 99px;
  height: 20px;
  width: 20px;
  display: inline-block;

  }
  
  @media (max-width:900px){
    .sidebare_left{
      width:93px;
      margin:0px 0 0 0 
    }
    .imag_myprofile , .search_input , .chat_titel{
           margin:0 0 0 100px;
    }
    .setting_div{
      margin:0 33px 0 -350px
    }
    .left_top_div{
      height:20px;
    }
    .chat_parent{
      width:65%;
    }
    
}
  

`

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ishak: [
        { user_name: "ishak", text: "هاي ", id: '1' },
        { user_name: "Rania", text: "هاي اسحاق", id: '2' },
        { user_name: "ishak", text: "عامله ايه وايه اخبار الويب", id: '1' },
        { user_name: "ishak", text: "حلو ولا ايه", id: '1' },
        { user_name: "Rania", text: " تمام", id: '2' },
        { user_name: "Rania", text: " ماشي الحال", id: '2' },
        { user_name: "ishak", text: "خلصتي", id: '1' },
        { user_name: "Rania", text: "لسه", id: '2' },
        { user_name: "Rania", text: " اخلص وابعتهولك", id: '2' },
        { user_name: "ishak", text: " تمام ماشي", id: '1' },
        { user_name: "Rania", text: " زي الفل", id: '2' },
        { user_name: "ishak", text: "  قشطات", id: '1' },
        { user_name: "Rania", text: " عاااااش", id: '2' },
        { user_name: "ishak", text: "هاي ", id: '1' },
        { user_name: "Rania", text: "هاي اسحاق", id: '2' },
        { user_name: "ishak", text: "عامله ايه وايه اخبار الويب", id: '1' },
        { user_name: "ishak", text: "حلو ولا ايه", id: '1' },
        { user_name: "Rania", text: " تمام", id: '2' },
        { user_name: "Rania", text: " ماشي الحال", id: '2' },
        { user_name: "ishak", text: "خلصتي", id: '1' },
        { user_name: "Rania", text: "لسه", id: '2' },
        { user_name: "Rania", text: " اخلص وابعتهولك", id: '2' },
        { user_name: "ishak", text: " تمام ماشي", id: '1' },
        { user_name: "Rania", text: " زي الفل", id: '2' },
        { user_name: "ishak", text: "  قشطات", id: '1' },
        { user_name: "Rania", text: " عاااااش", id: '2' },
      ],
      moon: [
        { user_name: "moon", text: "ي بت ", id: '1' },
        { user_name: "Rania", text: "نعم", id: '2' },
        { user_name: "moon", text: "عامله ايه", id: '1' },
        { user_name: "Rania", text: " زي الفل", id: '2' },
        { user_name: "Rania", text: " جاي امتي", id: '2' },
        { user_name: "moon", text: "لسه شويه", id: '1' },
        { user_name: "Rania", text: "ماشي", id: '2' },
        { user_name: "Rania", text: " خلي بالك من نفسك", id: '2' },
        { user_name: "moon", text: " حاضر ", id: '1' },

      ]

    };
  }

  Addtext = (text) => {
    var { ishak } = this.state;
    ishak.push(text);
    this.setState({ ishak })
  }
  open = () => {
    if (document.getElementById('sub').style.display === "block") {
      document.getElementById('sub').style.display = "none"
    }
    else {
      document.getElementById('sub').style.display = "block"
    }
  }



  render() {

    return (
      <BrowserRouter>
        <div className={cx(M)}>
         
            <div className="sidebare_left">
              <div className="left_top_div">
                <div className="img_titel">
                <img className="imag_myprofile" src={img10} width="40" height="40" />
                <h2 className="chat_titel"> Chats </h2>
                </div>
                <div className="setting_div">
                  <ul >
                    <li><div className="img_seeting" onClick={this.open}><img className="setting" src="https://cdn0.iconfinder.com/data/icons/iconico-3/1024/37.png" width="35" height="35" /></div>
                      <ul className="submenu" id="sub">
                        <li><Link to="/signup" className="edit_user">Edit usr info</Link> </li>
                        <li><Link to="/" className="log_out">Log Out</Link> </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="input">
                <input className="search_input" type="text" name="name" placeholder="Search in messenger" />
              </div>

              <div className="pages" >
                <Profiles image={img1} name="Ishak Saad" replay="you: زي الفل" date="12:8pm" path="/ishak.saad.589" />
                <Profiles image={img2} name="EL Moon" replay="تمام" date="1:9Am" path="/mena.kamel.3975" />
                <Profiles image={img3} name="Mero Kamel" replay="ماشي" date="sat" path="/mero.kamel.125" />
                <Profiles image={img4} name="Merna Harby" replay="you: وحشتيني ي بت" date="fri" path="/merna.harby.5" />
                <Profiles image={img5} name="Thomas Kamel " replay="you: عاااش" date="9:8Am" path="/thomas.kamel.3" />
                <Profiles image={img6} name="Dolagy Baky" replay=" زي الفل ي غاليه " date="3:2pm" path="/dolagy.baky.50" />
                <Profiles image={img7} name="Hanan Rady" replay="طبعا" date="2:8pm" path="/hanan.rady.127" />
                <Profiles image={img8} name="Youssef" replay="you: ok" date="8:2pm" path="/youssef.711" />
                <Profiles image={img9} name="Roma Ashraf" replay="حاضر " date="sun" path="/roma.ashraf.39" />
              </div>
            </div>

            <div className="chat_parent">
              
                <Switch>
                  <Route path="/chat/mena.kamel.3975">
                    <Chat_top src={img2} name="EL Moon" active="Active on messenger" />
                  </Route>
                  <Route path="/chat/ishak.saad.589">
                    <Chat_top src={img1} name="Ishak Saad" active="Active 20m ago" />
                  </Route>
                </Switch>
              
              <div className="messege">
                <Switch>
                  <Route path="/chat/mena.kamel.3975">
                    <Showtexts texts={this.state.moon} src={img2} />
                  </Route>
                  <Route path="/chat/ishak.saad.589">
                    <Showtexts texts={this.state.ishak} src={img1} />
                  </Route>
                </Switch>
              </div>
                 
                  <Addtexts Addtext={this.Addtext} />
           

            </div>
            <div className="sidebar_rigth">
              <div className="call_vedio">
                <svg className="call" height="32px" width="32px" viewBox="0 0 36 36"><g id="phone" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><polygon id="Fill-8" points="0 36 36 36 36 0 0 0"></polygon><path id="Fill-11" d="M12.8546683,23.0915802 C10.2003459,20.4371382 8.18827548,17.4933995 7.18895039,14.801598 C6.11677282,11.9134196 6.30082118,9.54827444 7.70754499,8.14106577 C8.38574404,7.46332572 9.22115105,6.9556194 9.80301228,6.64860076 C10.1768605,6.45174482 10.6202062,6.44887101 10.9902201,6.6495587 C12.2608248,7.33735708 14.2542027,9.8624776 14.6055242,11.228016 C14.6980277,11.5867632 14.6266131,11.9694589 14.4094936,12.2774354 L12.8029047,14.5630718 C12.7056083,14.7019726 12.682123,14.8820647 12.7415553,15.0406032 C13.4096892,16.8233229 14.2192144,18.3129141 15.9254961,20.01852 C17.6303399,21.7246049 19.1209399,22.5340612 20.904867,23.2027008 C21.0635129,23.2625718 21.2432476,23.2391024 21.3822424,23.1413929 L23.6205389,21.5679822 C23.9339963,21.3476569 24.313596,21.2868279 24.6572488,21.3696894 C26.1948195,21.7356211 28.7992956,23.6898115 29.3811568,24.9135753 C29.5474713,25.2637011 29.5388441,25.6674713 29.3576715,26.0209499 C29.0993327,26.5267404 28.5534185,27.4875506 27.8018877,28.2395308 C24.2474537,31.7915592 16.8807262,27.1187451 12.8546683,23.0915802" fill="#005FFF"></path></g></svg>
                <svg className="vedio" height="32px" width="32px" viewBox="0 0 36 36"><g id="camcorder" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><polygon id="Fill-8" points="0 36 36 36 36 0 0 0"></polygon><path id="original" d="M20,27 L9,27 C6.791,27 5,25.209 5,23 L5,13 C5,10.791 6.791,9 9,9 L20,9 C22.209,9 24,10.791 24,13 L24,23 C24,25.209 22.209,27 20,27 M30.5525,23.3995 L26.829,21.536 C26.321,21.282 26,20.762 26,20.193 L26,15.808 C26,15.2395 26.321,14.719 26.829,14.465 L30.5525,12.6015 C31.218,12.269 32,12.753 32,13.497 L32,22.504 C32,23.2485 31.218,23.732 30.5525,23.3995" fill="#005FFF"></path></g></svg>
                <svg className="information" height="32px" width="32px" viewBox="0 0 36 36"><g id="info-circle" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="Group"><polygon id="Fill-8" points="0 36 36 36 36 0 0 0"></polygon><path id="Fill-17" d="M18,10 C16.6195,10 15.5,11.119 15.5,12.5 C15.5,13.881 16.6195,15 18,15 C19.381,15 20.5,13.881 20.5,12.5 C20.5,11.119 19.381,10 18,10 Z M16,25 C16,25.552 16.448,26 17,26 L19,26 C19.552,26 20,25.552 20,25 L20,18 C20,17.448 19.552,17 19,17 L17,17 C16.448,17 16,17.448 16,18 L16,25 Z M18,30 C11.3725,30 6,24.6275 6,18 C6,11.3725 11.3725,6 18,6 C24.6275,6 30,11.3725 30,18 C30,24.6275 24.6275,30 18,30 Z" fill="#005FFF"></path></g></g></svg>
              </div>
              <div className="div_img-rigth">
                <Switch>
                  <Route path="/chat/mena.kamel.3975">
                    <Sidebar_rigth src={img2} name="EL Moon" active="Active on messenger" />
                  </Route>
                  <Route path="/chat/ishak.saad.589">
                    <Sidebar_rigth src={img1} name="Ishak Saad" active="Active 20m ago" />
                  </Route>
                </Switch>
              </div>
              <div className="action">
                <h4>More Actions</h4>
                <div className="more_action_div">
                  <div>search in conversation</div>
                  <div><svg id="sreach_conversation" height="22px" width="22px" viewBox="0 0 36 36"><g id="magnifying-glass" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="Search"><polygon id="Bounding-Box" points="0 36 36 36 36 0 0 0"></polygon><path id="Fill-1" d="M15.499,9.000053 C11.909,9.000053 8.9995,11.9106492 8.9995,15.5009175 C8.9995,19.0911858 11.909,22.0022817 15.499,22.0022817 C19.0885,22.0022817 21.998,19.0911858 21.998,15.5009175 C21.998,11.9106492 19.0885,9.000053 15.499,9.000053 Z M25.4875,28.30874 L21.6335,23.8523894 C21.313,23.482068 20.7755,23.4056049 20.355,23.6574834 C18.934,24.5085729 17.276,25.0023347 15.499,25.0023347 C10.253,25.0023347 6,20.7483865 6,15.5009175 C6,10.2539482 10.253,6 15.499,6 C20.7445,6 24.9975,10.2539482 24.9975,15.5009175 C24.9975,17.2770608 24.5045,18.9357608 23.655,20.3565755 C23.4065,20.7708757 23.491,21.3016197 23.8555,21.6184668 L28.3065,25.4841024 L25.4875,28.30874 Z M28.3065,25.4841024 C29.183,26.2452352 29.231,27.5915859 28.4105,28.4131896 C27.591,29.2352931 26.247,29.1873162 25.4875,28.30874 L28.3065,25.4841024 Z" fill="#000000"></path></g></g></svg></div>
                </div>

                <div className="more_action_div">
                  <div>edpt Nickname</div>
                  <div><svg id="img_nickname" height="22px" width="22px" version="1.1" viewBox="0 0 36 36"><g id="pencil-underline" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1"><g id="Group"><mask id="mask-2" fill="white"><polygon id="path-1" points="0 36 36 36 36 0 0 0"></polygon></mask><g id="Clip-4"></g><path id="Fill-1" d="M18.3042,15.77345 L12.9857,26.39495 C12.7662,26.83245 12.4477,27.21345 12.0552,27.50745 L8.2607,30.34495 C7.7407,30.73395 6.9992,30.36245 6.9992,29.71245 L6.9992,24.98495 C6.9992,24.49545 7.1137,24.01295 7.3332,23.57495 L12.6547,12.94745 C12.8522,12.55245 13.3322,12.39195 13.7272,12.58995 L17.9467,14.69895 C18.3422,14.89645 18.5022,15.37795 18.3042,15.77345 Z M19.9172,12.55245 C19.7192,12.94745 19.2392,13.10745 18.8442,12.90995 L14.6247,10.80095 C14.2292,10.60295 14.0692,10.12145 14.2667,9.72595 L15.4537,7.35495 C16.2287,5.80595 18.0962,5.05145 19.6687,5.77695 C21.2937,6.52695 21.9652,8.46245 21.1697,10.04895 L19.9172,12.55245 Z M28.9882,29.66445 C28.9082,30.15645 28.4462,30.49645 27.9477,30.49645 L12.4167,30.49645 C12.0117,30.49645 11.8392,29.98145 12.1632,29.73845 L13.2767,28.90095 C13.6257,28.63845 14.0507,28.49645 14.4877,28.49645 L28.0012,28.49645 C28.6087,28.49645 29.0902,29.03795 28.9882,29.66445 Z" fill="#000000" mask="url(#mask-2)"></path></g></g></svg></div>
                </div>

                <div className="more_action_div">
                  <div>change color</div><div><div className="them"></div></div>
                </div>
                <div className="more_action_div">
                  <div> change Emoji</div>
                  <div><img height="22px" width="22px" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/32/2764.png" /></div>
                </div>
              </div>
            </div>
          </div>
        
      </BrowserRouter>
    );
  }
}

export default Chat;
