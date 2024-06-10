import './worktext.css';
import image1 from './images/comp1Image.png';
import image2 from './images/comp2Image.png';
import combined from './images/combinedImage.png';
const AuthComponent = () => {
  return (
    <div className="auth-container">
      <div className="auth-image auth-image-1">
        <img src={image1} alt="Image 1" />
      </div>
      <div className="auth-buttons">
        <button className="google-btn">Sign in with Google</button>
        <button className="facebook-btn">Sign in with Facebook</button>
        <input type="email" placeholder="Email" className="email-input" />
        <button className="continue-btn">Continue with Email</button>
      </div>
      <div className="auth-image auth-image-2">
        <img src={image2} alt="Image 2" />
      </div>
      <div className="auth-image-combined">
        <img src={combined} alt="Combined Image" />
      </div>
    </div>
  );
}

export default AuthComponent;
