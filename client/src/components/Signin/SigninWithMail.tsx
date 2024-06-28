import React, { useState, ChangeEvent } from 'react';
import emailIcon from '../LoginCom/images/mail.png';
import './error.css'
import { api } from '../../models/model';
const SignInwithMail: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordStage, setIsPasswordStage] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  const mailLogin = async (): Promise<void> => {
    if (!isPasswordStage) {
      setIsPasswordStage(true);
    } else {
      try {
        const response = await fetch(`${api}users/emailpass`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (data === true) {
          window.location.href = '/community';
        } else {
          setError('Wrong email or password');
          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
        }
      } catch (error) {
        setError('An error occurred during login');
      }
    }
  };

  return (
    <>
      <input
        type={isPasswordStage ? 'password' : 'text'}
        placeholder={isPasswordStage ? 'Enter your password' : 'Email'}
        className="auth-input"
        value={isPasswordStage ? password : email}
        onChange={isPasswordStage ? handlePasswordChange : handleEmailChange}
      />
      <button onClick={mailLogin} className="auth-button email-button">
        <img src={emailIcon} alt="email icon" />
        <i className="fas fa-envelope"></i> {isPasswordStage ? 'Sign In' : 'Continue with Email'}
      </button>
      {error && <div className="error-popup">{error}</div>}
    </>
  );
};

export default SignInwithMail;
