// import React, { useState, useEffect } from 'react';
// import './Login.css';
// import { FaPhone } from "react-icons/fa6";
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//     const navigate = useNavigate();
//     const [isLogin, setIsLogin] = useState(true);
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [rememberMe, setRememberMe] = useState(false);
//     const [email, setEmail] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [mobileNumber, setMobileNumber] = useState('');
//     const [otp, setOtp] = useState('');
//     const [currentIconIndex, setCurrentIconIndex] = useState(0);

//     const icons = [
//         { src: "/icons/aerial.jpg", alt: "Aerial Survey" },
//         { src: "/icons/underwater.png", alt: "Underwater Survey" },
//         { src: "/icons/amphibious.png", alt: "Search and Rescue" },
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
//         }, 5000);
//         return () => clearInterval(interval);
//     }, []);

//     const handleLogin = (e) => {
//         e.preventDefault();
//         console.log('Username:', username, 'Password:', password, 'Remember Me:', rememberMe);
//     };

//     const handleSignUp = (e) => {
//         e.preventDefault();
//         console.log('Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword, 'Mobile Number:', mobileNumber, 'OTP:', otp);
//     };

//     const toggleAuth = () => {
//         setIsLogin(!isLogin);
//     };

//     return (
//         <div className='home-body'>
//             <video className="websitebg" autoPlay loop muted>
//                 <source src="/videos/WebBg.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>

//             <div className='bgblur'></div>

//             <div className='home-main-card'>
//                 <div className="login-side">
//                     {isLogin ? (
//                         <form className="auth-form login-form" onSubmit={handleLogin}>
//                             <img src='/src/assets/logo.jpg' alt='logo' className='login-logo'/>
//                             <h2>Login</h2>

//                             <input
//                                 type="text"
//                                 placeholder="Username"
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                             />

//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                             <a href="#" className="forgot-password" onClick={() => navigate('/forgot')}>Forgot your password?</a>
//                             <button type="submit" className="login-button" onClick={() => navigate('/home')}>Login</button>
//                             <div className="noaccount">
//                                 <div href="#" className="toggle-account" onClick={toggleAuth}>New user?  <span id='create-account'>create an account</span></div>
//                             </div>
//                         </form>
//                     ) : (
//                         <form className="auth-form signup-form" onSubmit={handleSignUp}>
//                             <img src='/src/assets/logo.jpg' alt='logo' className='login-logo'/>
//                             <h2>CREATE YOUR ACCOUNT</h2>

//                             <input
//                                 type="email"
//                                 placeholder="EMAIL"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />

//                             <input
//                                 type="password"
//                                 placeholder="NEW PASSWORD"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />

//                             <input
//                                 type="password"
//                                 placeholder="CONFIRM PASSWORD"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 required
//                             />

//                             <input
//                                 type="tel"
//                                 placeholder="MOBILE NUMBER"
//                                 value={mobileNumber}
//                                 onChange={(e) => setMobileNumber(e.target.value)}
//                                 maxLength="10"
//                                 required
//                             />

//                             <input
//                                 type="number"
//                                 placeholder='OTP'
//                                 value={otp}
//                                 onChange={(e) => setOtp(e.target.value)}
//                             />
//                             <div className='terms'>
//                                 <input type='checkbox' id='terms-check' required/>
//                                 <h4 id='tc-check'>I agree to comply with the AquaAirX Privacy Policy and Terms of Use</h4>
//                             </div>
//                             <button type="submit" className="signup-button">Sign Up</button>
//                             <a href="#" className="toggle-account" onClick={toggleAuth}>Already have an account? <span id='create-account'>Log In</span></a>
//                         </form>
//                     )}
//                 </div>

//                 <div className='img-side'>
//                     {icons.map((icon, index) => (
//                         <div
//                             key={index}
//                             className={`image ${index === currentIconIndex ? 'active' : 'inactive'}`}
//                             style={{ display: index === currentIconIndex ? 'block' : 'none' }}>
//                             <img src={icon.src} alt={icon.alt} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className='contact'>
//                 <FaPhone className='contactus'/>
//             </div>
//         </div>
//     );
// }

// export default Login;



import React, { useState, useEffect } from 'react';
import './Login.css';
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [currentIconIndex, setCurrentIconIndex] = useState(0);

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
        console.log('Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword, 'Mobile Number:', mobileNumber, 'OTP:', otp);
    };

    const toggleAuth = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className='login-home-body'>
            <video className="login-websitebg" autoPlay loop muted>
                <source src="/videos/WebBg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className='login-bgblur'></div>

            <div className='login-home-main-card'>
                <div className="login-login-side">
                    {isLogin ? (
                        <form className="login-auth-form login-form" onSubmit={handleLogin}>
                            <img src='/src/assets/logo.jpg' alt='logo' className='login-login-logo'/>
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
                            <a href="#" className="login-forgot-password" onClick={() => navigate('/forgot')}>Forgot your password?</a>
                            <button type="submit" className="login-login-button" onClick={() => navigate('/home')}>Login</button>
                            <div className="login-noaccount">
                                <div href="#" className="login-toggle-account" onClick={toggleAuth}>New user?  <span id='login-create-account'>create an account</span></div>
                            </div>
                        </form>
                    ) : (
                        <form className="login-auth-form signup-form" onSubmit={handleSignUp}>
                            <img src='/src/assets/logo.jpg' alt='logo' className='login-login-logo'/>
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
                                type="tel"
                                placeholder="MOBILE NUMBER"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                                maxLength="10"
                                required
                            />

                            <input
                                type="number"
                                placeholder='OTP'
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <div className='login-terms'>
                                <input type='checkbox' id='login-terms-check' required/>
                                <h4 id='login-tc-check'>I agree to comply with the AquaAirX Privacy Policy and Terms of Use</h4>
                            </div>
                            <button type="submit" className="login-signup-button">Sign Up</button>
                            <a href="#" className="login-toggle-account" onClick={toggleAuth}>Already have an account? <span id='login-create-account'>Log In</span></a>
                        </form>
                    )}
                </div>

                <div className='login-img-side'>
                    {icons.map((icon, index) => (
                        <div
                            key={index}
                            className={`login-image ${index === currentIconIndex ? 'active' : 'inactive'}`}
                            style={{ display: index === currentIconIndex ? 'block' : 'none' }}>
                            <img src={icon.src} alt={icon.alt} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='login-contact'>
                <FaPhone className='login-contactus'/>
            </div>
        </div>
    );
}

export default Login;
