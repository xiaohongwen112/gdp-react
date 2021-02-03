import { React, Component } from 'react';
import './login.less'
import imgURL from '../../assets/title.png';
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export default class Login extends Component {
  state = {
    userName: '',
    passWord: ''
  }

  render() {
    return (
      <div id="login-main">
         <div className="login-wrap">
          <div className="left-login">
          </div>
          <div style={{marginTop: '3vh', marginLeft:'-2vw'}}>
            <h1 style={{paddingTop:'7vh', width:'21vw'}}>
              <img src={imgURL} style={{display:'inline-block', width:'21vw', height: '10vh'}} />
            </h1>
            <div className="user-oprate">
              <div className="user-name">
                <span className="icon-span"><UserOutlined style={{color: "#A2BEFB", fontSize: '26px'}} /></span><input value={this.state.userName} onChange={this.onchangeFN('userName')} className="input-login" type="text" />
              </div>
              <div className="user-name">
                <span className="icon-span"><LockOutlined  style={{color: "#A2BEFB", fontSize: '26px'}} /></span><input value={this.state.passWord} className="input-login" onChange={this.onchangeFN('passWord')} type="password" />
              </div>
            </div>
            <button className="loginBtn" onClick={this.loginFn()}>登录</button>
          </div>
        </div>
      </div>
    )
  }

  loginFn = () => {
    const { passWord, userName } = this.state;
    if(passWord == '112' && userName == '112') {
      
    }
  }
  onchangeFN = (type) => {
    console.log('login', type );
    return (event) => {
      this.setState({
        [type]: event.target.value
      })
      console.log(event.target.value)
    }
  }
}