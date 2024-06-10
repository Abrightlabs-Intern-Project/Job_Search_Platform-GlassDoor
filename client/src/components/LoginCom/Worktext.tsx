import './worktext.css';

const AuthComponent = () => {
  return (
    <div className="auth-container">
      <p className="initial-text">
        Create an account or sign in. By continuing, you agree to <br />our <a href="/terms">Terms of Use</a> and acknowledge our <a href="/privacy">Privacy Policy</a>.
      </p>
      <button className="auth-button google-button">
        <i className="fab fa-google"></i> Continue with Google
      </button>
      <button className="auth-button facebook-button">
        <i className="fab fa-facebook-f"></i> Continue with Facebook
      </button>
      <center>or</center>
      <input type="text" placeholder="Email" className="auth-input" />
      <button className="auth-button email-button">
        <i className="fas fa-envelope"></i> Continue with Email
      </button>
    </div>
  );
}

export default AuthComponent;
