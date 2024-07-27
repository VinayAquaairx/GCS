import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgotpassword.css';

const Forgotpassword = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate email sending
        setEmailSent(true);
        // Clear the input field
        setUsername('');
        // Optionally, you can add more logic here to actually handle the email sending
    };

    return (
        <div className='forgotpassword-body'>
            <video className="websitebg" autoPlay loop muted>
                <source src="/videos/WebBg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='bgblur'></div>
            <div className='forgot-form'>
                <div className='forgot-form-body'>
                    <form className="auth-form login-form" onSubmit={handleSubmit}>
                        <h2>Forgot Password?</h2>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <button type="submit" className="login-button" onClick={() => navigate('/newpassword')} >Submit</button>
                        {emailSent && <p className="success-message">Email Sent Successfully</p>}
                    </form> 
                </div>
            </div>
        </div>
    );
};

export default Forgotpassword;
