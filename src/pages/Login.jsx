
import React, { useState, useEffect } from 'react';
import './Login.css';
import { FaMobile, FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [currentIconIndex, setCurrentIconIndex] = useState(0);
    const [phoneNumber,setPhoneNumber] = useState('')

    const icons = [
        { src: "/icons/aerial.jpg", alt: "Aerial Survey" },
        { src: "/icons/underwater.png", alt: "Underwater Survey" },
        { src: "/icons/amphibious.png", alt: "Search and Rescue" },
    ];
        
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
        
    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Username:', username, 'Password:', password, 'Remember Me:', rememberMe);
    };
        
    const handleSignUp = (e) => {
        e.preventDefault();
        console.log('Username:', username, 'Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);
    };
        
    const toggleAuth = () => {
        setIsLogin(!isLogin);
    };


  return (
    <div className='login-body'>
        <video className="websitebg" autoPlay loop muted>
            <source src="/videos/WebBg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className='bgblur'></div>

        <div className='login-main-card'>
            <div className="login-side">
                {isLogin ? (
                    <form className="auth-form login-form" onSubmit={handleLogin}>
                        <img src='/src/assets/logo.jpg' alt='logo' className='login-logo'/>
                        <h2>Login</h2>

                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <a href="#" className="forgot-password" onClick={() => navigate('/forgot')}>Forgot your password?</a>
                        <button type="submit" className="login-button" onClick={() => navigate('/home')}>Login</button>
                        <div className="noaccount">
                            <div href="#" className="toggle-account" onClick={toggleAuth}>New user?  <span id='create-account'>create an account</span></div>
                        </div>
                    </form> 
                ) : (
                    <form className="auth-form signup-form" onSubmit={handleSignUp}>
                        <img src='/src/assets/logo.jpg' alt='logo' className='login-logo'/>

                        <h2>CREATE YOUR ACCOUNT</h2>

                        <input
                            type="email"
                            placeholder="EMAIL"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="NEW PASSWORD"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="CONFIRM PASSWORD"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                        <input
                            type="number"
                            maxLength="10"
                            placeholder="MOBILE NUMBER"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            required
                        />
                        <input placeholder='OTP' type='number'/>

                        <div className='terms'>
                            <input type='checkbox' id='terms-check' required/>
                            <h4 id='terms-text'>I agree to comply with the AquaAirX Privacy Policy and Terms of Use</h4>
                        </div>

                        <button type="submit" className="signup-button">Sign Up</button>

                        <div href="#" className="toggle-account" onClick={toggleAuth}>Already have an account? <span id='create-account'>Log In</span></div>
                    </form>
                )}
            </div>

            <div className='img-side'>
                {icons.map((icon, index) => (
                    <div
                        key={index}
                        className={`image ${index === currentIconIndex ? 'active' : 'inactive'}`}
                        style={{ display: index === currentIconIndex ? 'block' : 'none' }}>
                        <img src={icon.src} alt={icon.alt} />
                    </div>
                ))}
            </div>
        </div>
        <div className='contact'>
            <FaPhone className='contactus'/>
        </div>
    </div>
  )
}

export default Login


// non responsive below 770px either stop it from getting small frm there or change css