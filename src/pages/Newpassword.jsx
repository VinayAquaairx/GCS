import React, { useState } from 'react';
import './Newpassword.css'
import { useNavigate } from 'react-router-dom';
const Newpassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [Newpassword, setNewpassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setNewpassword('');
    };
  return (
    <div className='newpassword-parent'>
      <video className="websitebg" autoPlay loop muted>
                <source src="/videos/WebBg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='bgblur'></div>
            <div className='forgot-form'>
                <div className='forgot-form-body'>
                    <form className="auth-form login-form" onSubmit={handleSubmit}>
                        <h2>Reset your password here</h2>
                        <input
                            type="password"
                            placeholder="Enter New password"
                            required
                        />
                        <input 
                        type='password'
                        placeholder='Confirm New password'
                        required
                        />
                        <button type="submit" className="login-button">Submit</button>
                        <a href='/' >Sign In</a>
                    </form> 
                </div>
            </div>
    </div>
  )
}

export default Newpassword
