import './css/companyheader.css'
export const CompanyHeader = () => {
  return (
    <>
    <div className='companyheader'>
        <div className='companyimg'>
            <center><img src="https://www.glassdoor.co.in/explore/static/images/hero-reviews.png" alt="" /></center>

        </div>
        <div className='companytext'>
        <center>
        <div className='texdiv'>
                <h2 className='parati'>Find a workplace that works for you <span className='new'>NEW</span></h2>
                <p className='paratext'>Discover what an employer is really like before you make your next move. Search reviews and ratings, and filter companies based on the qualities that matter most to your job search.</p>
            </div>
        </center>

            
            <center>
            <div className='btndiv'>
              <button className='compbtn btn1'>Work/Life Balance</button>
              <button className='compbtn btn2'>Diversity and inclusion</button>
              <button className='compbtn btn3'>Compensation and Benefits</button>
            </div>
            </center>
            


        </div>

    </div>
    
    </>
  )
}
