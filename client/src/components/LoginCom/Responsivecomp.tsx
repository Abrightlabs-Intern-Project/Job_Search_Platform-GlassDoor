import './responsivecopm.css';
import combine from './images/combinedImage.png';
import image1 from './images/comp1Image.png';
import image2 from './images/comp2Image.png';
import AuthComponent from './Worktext';
const ResponsiveComponent = () => {
  return (
    <>
    <div className='text'><center>Your work people are here</center> </div>
    <div className="container">
    <img src={combine} alt="" />
    <div className='text1'><center>Your work people are here</center> </div>

      <div className="box box1">
        <img src={image1} alt="" />
      </div>
      <div className="box box2">
    <AuthComponent />
      {/* <button className="">
                    <img src="" alt="Sign In" className="signin-icon" />
                    continue with Google
                </button>
                <button className="">
                    <img src="" alt="Sign In" className="signin-icon" />
                    continue with FaceBook
                </button>

        <input type="text" name="" id="" />
        <button>continue with email</button> */}

      </div>
      <div className="box box3">
        <img src={image2} alt="" />
      </div>
    </div>
    </>
  );
}

export default ResponsiveComponent;
