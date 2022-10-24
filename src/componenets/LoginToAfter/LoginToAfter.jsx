import React from 'react';
import './LoginToAfter.scss';
import vector from '../../assets/icon/vector.png';


const LoginToAfter = (props) => {
    return (
        <div className='login'>
            <div className="cover"></div>
            <div className="container">
                <div className='loginOn'>
                    <p>To find your account, enter your email address.</p>
                    <img src={vector} alt="vector"/>
                </div>
            </div>
        </div>
    );
};

export default LoginToAfter;