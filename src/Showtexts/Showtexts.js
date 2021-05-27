import React from 'react'
import { css, cx } from 'emotion'

const N = css`

.text_left{
    background-color:#f0f1f3;
    color:rgba(0, 0, 0, 1);
     border-radius: 15px;
     padding: 6px 12px 7px;
     font-family: font-family: Lucida Grande, Tahoma, Verdana, Arial, sans-serif;
    font-size: 16px;
    margin:-6px 5px 5px 5px;
    max-width:200px;
    line-height: 1.34;
   
}

.div_left{
    display: flex;
    margin: 3px 0 0px 0px;
    float: left;
    width:100%;
}
.div_right{
     display: flex;
    width:100%;
    justify-content: flex-end;
    margin: 1px 0 0px 0px;
}

.text_rigth{
    
    background-attachment: fixed;
    background-color: rgb(240, 29, 106);
    background-image: linear-gradient(rgb(0, 95, 255) 0%, rgb(146, 0, 255) 50%, rgb(255, 46, 25) 100%);
    color: white;
    text-align: right;
    border-radius: 15px;
    padding: 6px 12px 7px;
    line-height: 1.34;
    font-family: Lucida Grande, Tahoma, Verdana, Arial, sans-serif;
    font-size: 15px;
    margin:0px 5px 0px 0;
    max-width:200px;
   
}
#img{
    border-radius: 30px;
    height:28px;
     width:28px;
     margin:0 0 0 10px
}


  
`

const Showtexts = (props) => {
    const { texts, src } = props;
    const listtexts = texts.map(text => {
        if (text.id == 1) {
            return (
                <div className={cx(N)}>
                    <div className="div_left">
                        <img id="img" src={src} />
                        <span className="text_left"> {text.text}</span>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={cx(N)}>
                    <div className="div_right">
                        <span className="text_rigth"> {text.text}</span>
                    </div>
                </div>
            )
        }
    })

    return (
        <div className="showtexts">
            {listtexts}
        </div>
    );
}
export default Showtexts; 