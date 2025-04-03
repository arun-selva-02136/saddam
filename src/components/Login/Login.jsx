import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { auth } from '../../pages/Firebase/config'; // Ensure Firebase is configured
import { signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import './Login.css';

const Login = ({ onClose }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [error, setError] = useState('');
  const [showResetForm, setShowResetForm] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (userCredential.user) {
        onClose(); 
        navigate('/dashboard');
      }
    } catch (err) {
     
      messageApi.error("Invalid email or password")
    }
  };

  const handleForgotPassword = () => {
    setShowResetForm(true);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    
    try {
      if (!resetEmail.trim()) {
       
        messageApi.error("Please enter your email to reset the password.")
        return;
      }
      
      console.log(resetEmail);
      await sendPasswordResetEmail(auth, resetEmail.trim());
      
      messageApi.success("Password reset link sent successfully! Check your email.")

      setShowResetForm(false);
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        
        messageApi.error(" No account found with this email.")


      } else if (err.code === 'auth/invalid-email') {
        
       
        messageApi.error("Please enter a valid email address.")

      } else {
       
        messageApi.error(" Failed to reset password. Try again later..")
        
      }
    }
  };
  

  return (
    <div className="overlay">
            {contextHolder}
      <div className='main-container'>
        <div className="login-container">
          <button className="close-btn" onClick={onClose}>X</button>
          {showResetForm ? (
            <>
              <h4>Reset Password</h4>
              {error && <p className="error-message">{error}</p>}
              <input className='overlay-input' type="email" placeholder="Enter your email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} required  style={{display:"flex",marginTop:"50px",marginLeft:"15px"}}/> 
              <button className='login-btn' type='submit' onClick={handleResetPassword} style={{display:"flex",width:"100px"}}>send email</button>
            <a href="#"> <p className='back-to-login' onClick={() => setShowResetForm(false)} style={{textAlign:"start",marginLeft:"50px",textDecoration:"underline"}}>Back to Login</p> </a>
            </>
          ) : (
            <>
              <h2>Login</h2>
              {error && <p className="error-message">{error}</p>}
              <form onSubmit={handleSubmit}>
                <input className='overlay-input' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className='overlay-input' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button className='login-btn' type="submit">Login</button>
              </form>
             <a href="#"><p className='forgot-password-link' style={{textAlign:"start",marginLeft:"40px" ,textDecoration:"underline"}}  onClick={handleForgotPassword}>Forgot Password?</p></a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
