import { Bowls } from '../community/Bowls';
import './css/profile.css';
import { GrUpload } from "react-icons/gr";
import profile from './images/profileimage.jpg'
import { GrEdit } from "react-icons/gr";
import { SlLock } from "react-icons/sl";

export const Profilemain = () => {

    function handleProfileClick() {
        window.location.href = "/profilepage";
    }

    function handleLogoutClick() {
        window.location.href = "/";
    }
    function handlejobClick() {
        window.location.href = "/jobs";
    }

    return (
        <>
            <div className="profile-main">
                <div className="profile-main-left">
                    <center><img className='profileimgs' src={profile} alt="" /></center>
                    <h2 className='pronam'>User Name</h2>
                    <p className='proloc'>Location</p>
                    <button onClick={handleProfileClick} className='probtn'> Profile</button>
                    <br />
                    <button onClick={handlejobClick} className='probtn'> Job Activity</button>
                    <hr />
                    <div onClick={handleLogoutClick} className='signou'>
                        <p>Sign out</p>
                        <div className='signoutim'>
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m12.02 6.981 4.687 4.664a.5.5 0 0 1 0 .708l-4.686 4.687-1.06-1.06 3.228-3.23H2v-1.5h12.184l-3.222-3.206 1.059-1.063Z" fill="#000"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 4.5c-.69 0-1.25.56-1.25 1.25v3.393H6V5.75A2.75 2.75 0 0 1 8.75 3h9.5A2.75 2.75 0 0 1 21 5.75v11.995a2.75 2.75 0 0 1-2.757 2.75l-9.5-.026A2.75 2.75 0 0 1 6 17.72v-2.535h1.5v2.535a1.25 1.25 0 0 0 1.247 1.25l9.5.026a1.25 1.25 0 0 0 1.253-1.25V5.75c0-.69-.56-1.25-1.25-1.25h-9.5Z" fill="#000"></path></svg>
                        </div>
                    </div>

                    <a href="https://help.glassdoor.com/s/?language=en_US"><button className='helpbtn'><center>Help center</center></button>
                    </a>
                </div>
                <div className="profile-main-middle">
                    <div className='profilemidhead'>
                        <div className='promidtxt'>
                            <h3 className='prohea'>Profile</h3>
                            <p className='prohetxa'>Build a better Glassdoor experience by managing your employment information.</p>
                        </div>
                        <img className='promidimg' src="https://www.glassdoor.co.in/profiles-next/static/_next/static/media/people.3da85b0f.png" alt="" />
                    </div>
                    <hr className='separa' />

                    <h3> <span className='spantxts'>My information</span> <button className='editbtn'> <GrEdit /></button>
                    </h3>
                    <p>Updating your information will offer you the most relevant content and conversations.

                    </p>
                    <div className='displaymode'>
                        <p className='ques'>Employment status*</p>
                        <p className='answ'>profession</p>
                        <p className='ques'>Full name*</p>
                        <p className='answ'>username</p>
                        <p className='ques'>Location*</p>
                        <p className='answ'>location</p>
                        <p className='ques'>University</p>
                        <p className='answ'>None</p>
                        <p className='ques'>Degree type</p>
                        <p className='answ'>Bachelor's</p>
                    </div>
                    <div className='editmode'>
                        <p className='ques'>Employment status*</p>
                        <div className='lockdata'>
                            <SlLock className='lockimags' />
                            <div >
                                <p className='locktxt'>Please contact Glassdoor to update this part of your profile.</p>
                                <p className='locktxt'>Fill out a <a href="https://help.glassdoor.com/s/ContactUs?language=en_US"><span className='gresp'>request form in our Help Centre</span></a></p>
                            </div>
                        </div>

                        <p className='ques'>Full name*</p>
                        <div className='lockdata'>
                            <SlLock className='lockimags' />
                            <div >
                                <p className='locktxt'>Please contact Glassdoor to update this part of your profile.</p>
                                <p className='locktxt'>Fill out a <a href="https://help.glassdoor.com/s/ContactUs?language=en_US"><span className='gresp'>request form in our Help Centre</span></a></p>
                            </div>
                        </div>
                        <p className='ques'>Location*</p>
                        <input type="text" className='inputpro' placeholder={'location'}/>

                        <p className='ques'>Degree type</p>
                        <input type="text" className='inputpro' placeholder={'degree'}/>

                        <div className='buttonssav'>
                        <button className='cnbtn'>Cancel</button>
                        <button className='savbtn'>Save</button>
                        </div>
                    </div>
                    <hr className='separa' />
                    <div className='widthlow'>
                        <h2>CV</h2>
                        <p>After you upload a CV, it will be used to pre-fill job applications that you submit via Easy Apply. You can also make your CV visible or not visible to employers that are currently hiring. See our <a href="https://hrtechprivacy.com/brands/glassdoor#privacypolicy"><span className='prigre'>Privacy Policy</span> </a>for more info.</p>
                        <div className='uploadcv'>
                            <GrUpload className='uplo' />
                            <div className='uplaofil'>
                                <h3>Upload CV</h3>
                                <p className='cvtxt'>Use a pdf, docx, doc, rtf or txt</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="profile-main-right">
                    <h2 className='profile-right-head'>Join in the conversation</h2>
                    <p className='profile-right-headtxt'>Dive in to a Bowl for real, anonymous talk with other professionals.</p>
                    <div className='bowlleft'>
                        <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/18SaaIiCOZhvc.jpg', name: 'Big 4 Discussions!', desc: 'Originally this was Made for confessions. This Bowl is now' }} />
                        <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/7N3dbbQ9JjRLG.jpg', name: 'Pune Network', desc: "Physical and virtual group and 1:1 meetups for folks in Pune, India." }} />
                        <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/cwwTrIKrzBNiO.jpg', name: 'Bangalore City', desc: "Useful Resources https://1drv.mssgfhhdb" }} />
                        <Bowls bowl={{ icon: 'https://www.glassdoor.com/images/bowls/headers/default-grey.png', name: 'Referral and Opportunities', desc: 'This group provide referral and job opportunities to' }} />
                    </div></div>

            </div>
        </>
    )
}
