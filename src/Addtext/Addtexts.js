import React, { Component } from 'react';
import { css, cx } from 'emotion'

const N = css`

display:flex;
flex-grow:1;
background-color: rgba(255, 255, 255, 1);
padding: 0 8px;
height: 52px;

.icon{
    width:110px;
  margin:9px 0 0 0 
}

.icon_plus{
    margin:13px 5px 0 0
}

.input{
    width:70%;
    background-color: white;
}

.message_input{
    background-color: rgba(0, 0, 0, .05);
    border-radius: 18px;
    width:100%;
    height: 33px;
    border: none;
    font-family: Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif;
    line-height: 1.28;
    font-size: 12px;
    color: #1c1e21;
     padding:0 0 0 10px;
     margin: 8px 0 0 0;
}

.hart{
    margin: 8px 0 0 0;
}
@media (max-width:1000px){
    .icon{
       flex-direction: column;
       width:0px;
       margin:10px 0 0 0
    }
    .input{
        width:80%;
        
    }
}

`

class Addtexts extends Component {
    state = {
        chat: ""
    };
    handelchange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handelsubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.Addtext(this.state);
        this.setState({
            chat: ""
        })
    }

    render() {
      
        return (
            <div className={cx(N)}>
                <div className="icon_plus" >
                    <svg height="24px" width="24px" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><polygon points="-6,30 30,30 30,-6 -6,-6 "></polygon><path d="m18,11l-5,0l0,-5c0,-0.552 -0.448,-1 -1,-1c-0.5525,0 -1,0.448 -1,1l0,5l-5,0c-0.5525,0 -1,0.448 -1,1c0,0.552 0.4475,1 1,1l5,0l0,5c0,0.552 0.4475,1 1,1c0.552,0 1,-0.448 1,-1l0,-5l5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1m-6,13c-6.6275,0 -12,-5.3725 -12,-12c0,-6.6275 5.3725,-12 12,-12c6.627,0 12,5.3725 12,12c0,6.6275 -5.373,12 -12,12" fill="rgb(255, 46, 25)"></path></g></svg>
                </div>
                <div className="icon">
                    <svg className="icon_gif" height="32px" width="32px" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><polygon points="0 36 36 36 36 0 0 0"></polygon><path d="M27.002,13.5 L22.502,13.5 C21.95,13.5 21.502,13.948 21.502,14.5 L21.502,21.5 C21.502,22.052 21.95,22.5 22.502,22.5 C23.054,22.5 23.502,22.052 23.502,21.5 L23.502,19.5 L26.502,19.5 C27.054,19.5 27.502,19.052 27.502,18.5 C27.502,17.948 27.054,17.5 26.502,17.5 L23.502,17.5 L23.502,15.5 L27.002,15.5 C27.554,15.5 28.002,15.052 28.002,14.5 C28.002,13.948 27.554,13.5 27.002,13.5 Z M19.502,14.5 C19.502,13.948 19.054,13.5 18.502,13.5 C17.95,13.5 17.502,13.948 17.502,14.5 L17.502,21.5 C17.502,22.052 17.95,22.5 18.502,22.5 C19.054,22.5 19.502,22.052 19.502,21.5 L19.502,14.5 Z M14.963,16.9995 L12.502,17 C11.95,17 11.502,17.448 11.502,18 C11.502,18.552 11.95,19 12.502,19 L13.8855,19 C13.7835,20.1495 13.095,21 11.829,21 C10.3875,21 9.4925,19.725 9.4925,17.95 C9.4925,16.207 10.4655,14.9785 11.886,14.9785 C12.6395,14.9785 13.109,15.3665 13.4295,15.764 C13.6765,16.0695 14,16.229 14.353,16.229 C15.0175,16.229 15.574,15.5085 15.094,14.791 C14.471,13.859 13.335,13.25 11.8795,13.25 C9.179,13.25 7.502,15.2135 7.502,17.9735 C7.502,20.7655 9.071,22.75 11.798,22.75 C14.352,22.75 16.002,20.982 16.002,17.986 C16.002,17.441 15.5365,16.9995 14.963,16.9995 Z M27,30 L17,30 C15.811,30 14.7455,29.48 14.0135,28.656 C13.6395,28.235 13.1,28 12.537,28 L9,28 C6.791,28 5,26.209 5,24 L5,10 C5,7.791 6.791,6 9,6 L19,6 C20.189,6 21.2545,6.52 21.9865,7.3435 C22.3605,7.7645 22.9,8 23.463,8 L27,8 C29.209,8 31,9.791 31,12 L31,26 C31,28.209 29.209,30 27,30 Z" fill="#FF2E19"></path></g></svg>
                    <svg className="icon_sticker" height="34px" width="34px" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><polygon points="0 36 36 36 36 0 0 0"></polygon><path d="M22.5,18.5 L27.998,18.5 C28.8885,18.5 29.335,19.577 28.705,20.207 L20.207,28.705 C19.577,29.335 18.5,28.8885 18.5,27.9975 L18.5,22.5 C18.5,20.291 20.291,18.5 22.5,18.5 M16.5,22.5 L16.5,28 C16.5,28.552 16.052,29 15.5,29 L11,29 C8.791,29 7,27.209 7,25 L7,11 C7,8.791 8.791,7 11,7 L25,7 C27.209,7 29,8.791 29,11 L29,15.5 C29,16.052 28.552,16.5 28,16.5 L22.5,16.5 C19.1865,16.5 16.5,19.1865 16.5,22.5" fill="#FF2E19"></path></g></svg>
                    <svg className="icon_files" height="34px" width="34px" viewBox="0 0 36 36"><g fill="none" fill-rule="evenodd"><g id="Group"><polygon points="0 36 36 36 36 0 0 0"></polygon><path d="M13.5,11 C12.1195,11 11,12.119 11,13.5 C11,14.881 12.1195,16 13.5,16 C14.8805,16 16,14.881 16,13.5 C16,12.119 14.8805,11 13.5,11 M26.638,21.467 L21.2375,18.767 C19.199,17.7485 16.801,17.7485 14.7625,18.767 L9.362,21.467 C9.1955,21.55 9,21.429 9,21.243 L9,11 C9,9.8955 9.8955,9 11,9 L25,9 C26.1045,9 27,9.8955 27,11 L27,21.243 C27,21.429 26.8045,21.55 26.638,21.467 M25,7 L11,7 C8.7905,7 7,8.791 7,11 L7,25 C7,27.209 8.7905,29 11,29 L25,29 C27.209,29 29,27.209 29,25 L29,11 C29,8.791 27.209,7 25,7" fill="#FF2E19"></path></g></g></svg>
                </div>

                <div className="input">
                    <form onSubmit={this.handelsubmit}>
                        <input className="message_input" type="text" name="nam" placeholder="Type a message..." autoComplete="off" autoFocus="on"
                            id="chat" onChange={this.handelchange} />
                    </form>
                </div>
                <div className="hart">
                    <img height="26px" width="26px" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t72/1/32/2764.png" />
                </div>
            </div>

        );
    }
}
export default Addtexts;