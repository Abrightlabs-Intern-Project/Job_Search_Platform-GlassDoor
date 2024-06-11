import email from '../LoginCom/images/mail.png'

function SignInwithMail({handleClick}:any) {
  function mailLogin() {
    window.location.href = "/withmail";
  }
  return (
   

    <button onClick={()=>handleClick()} className="auth-button email-button">
    <img src={email} alt="" />
    <i className="fas fa-envelope"></i> Continue with Email
  </button>
   
  );
}
export default SignInwithMail;