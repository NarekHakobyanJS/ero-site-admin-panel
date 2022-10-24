import React from 'react';
import './login.scss';
import user from '../../assets/icon/user.svg';
import password from '../../assets/icon/password.svg';
import logo from '../../assets/logo/logo.png';

const Login = (props) => {
    return (
        <div className='login'>
            <div className="cover" onClick={props.closeLogin}></div>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <input type="text" placeholder='User Email' style={{backgroundImage:`url(${user})`}}/>
                <input type="password" placeholder='Password' style={{backgroundImage:`url(${password})`}}/>
                <span className='forgotPassword'>Forgot Password ?</span>
                <button>Log in</button>
            </div>
        </div>
    );
};

export default Login;