import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firbase";
import google from '../LoginCom/images/google.png'

function SignInwithGoogle() {
  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
        window.location.href = "/profile";
      
    });
  }
  return (
   

      <button onClick={googleLogin} className="auth-button google-button">
      
        <img className='google' src={google} alt="" />
        <i className="fab fa-google"></i> Continue with Google
      </button>
   
  );
}
export default SignInwithGoogle;