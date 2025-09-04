import React from 'react';
import './LoginFinalPage.css';
import arrow from '../../assets/icons/white.svg';
import finalImg from '../../assets/images/Illustration.png';

function LoginFinalPage() {
  return (
    <div className='final-page'>
      <div className="final-container">
        <div className='final-content'>
          <img src={finalImg} alt="hi" />
          <div className='final-bottom'>
            <h2>You are successfully registered!</h2>
            <button>Let's start <img src={arrow} alt="ar" /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginFinalPage