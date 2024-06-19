import './responsivecopm.css';
import combine from './images/combinedImage.png';
import image1 from './images/comp1Image.png';
import image2 from './images/comp2Image.png';
import './worktext.css';
import facebook from './images/facebook.png'

import SignInwithGoogle from '../Signin/SigninwithGoogle';
import SignInwithMail from '../Signin/SigninWithMail';

const ResponsiveComponent = () => {

  
  return (
    <>
    <div className='text'><center>Your work people are here</center> </div>
    <div className="container">
    <img className='comb' src={combine} alt="" />
    <div className='text1'><center>Your work people are here</center> </div>

      <div className="box box1">
        <img src={image1} alt="" />
      </div>
      <div className="box box2">
      <div className="auth-container">
      <p className="initial-text">
        Create an account or sign in. By continuing, you agree to <br />our <a href="/terms">Terms of Use</a> and acknowledge our <a href="/privacy">Privacy Policy</a>.
      </p>
      <SignInwithGoogle />
      
      <button className="auth-button facebook-button">
        <img className='facebook' src={facebook} alt="" />
        <i className="fab fa-facebook-f"></i> Continue with Facebook
      </button>
      <center>or</center>
      
      
      <SignInwithMail />
      <p className='createaccount'>create new account</p>
    </div>

      </div>
      <div className="box box3">
        <img src={image2} alt="" />
      </div>
    </div>
    </>
  );
}

export default ResponsiveComponent;
