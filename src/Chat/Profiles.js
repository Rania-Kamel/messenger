import React, { Component } from 'react'
import { css, cx } from 'emotion'
import { NavLink } from 'react-router-dom';

const T = css`
.page_div{
  display:flex;
  height: 65px;
  mar
}
.img{
    height:50px;
     width:50px;
  
}
.profile{
  display:flex;
  margin: 6px 0 0 15px;
  
}

.replay_name{
  display:flex;
  flex-direction: column;
  justify-content: center;
    margin: -4px 0 0 10px  
}
.Name_profile{
  color: rgba(0, 0, 0, 1);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;
  margin-top:2px
}
.replay_date{
  display:flex;
  align-items: baseline;
  margin-top:-3px
}
.replay{
    font-size: 13px;
    height: 18px;
    color: rgba(153, 153, 153, 1);
  font-size: 13px;
  font-weight: 400;
  Lucida Grande, Tahoma, Verdana, Arial, sans-serif;
}
.date{
  color: rgba(0, 0, 0, .40);
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  margin:-2px 0 0 10px
}
.active{
  background-color: rgba(0, 0, 0, .05);
  width:91%;
  display: flex;
  border-radius: 10px;
   margin:0 30px 0px 6px;
  height:60px;
  .img{
    margin:0px 0px 0 -5px
  }
}
#nave{
  text-decoration: none;
}
@media (max-width:900px){
    .Name_profile , .replay , .date{
      margin:0 0 0 150px
    }
    .active{
      width:60px;
    }
}
`

class Profiles extends Component {

  render() {
    const { image, name, replay, date, path } = this.props;
    return (
      <div className={cx(T)}>
        <NavLink to={"/chat" + path} id="nave">
          <div className="page_div">
            <div className="profile"> <img src={image} className="img" /></div>
            <div className="replay_name">
              <div className="Name_profile">{name}</div>
              <div className="replay_date"><span className="replay">{replay}</span><abbr className="date">{date}</abbr></div>
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}
export default Profiles;