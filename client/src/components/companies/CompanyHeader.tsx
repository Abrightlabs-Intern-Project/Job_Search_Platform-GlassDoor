import './css/companyheader.css'
export const CompanyHeader = () => {
  return (
    <>
    <div className='companyheader'>
        <div className='companyimg'>
            <center><img src="https://www.glassdoor.co.in/explore/static/images/hero-reviews.png" alt="" /></center>

        </div>
        <div className='companytext'>
            <div className='texdiv'>
                <h2>Find a workplace that works for you <span className='new'>NEW</span></h2>
                <p>Discover what an employer is really like before you make your next move. Search reviews and ratings, and filter companies based on the qualities that matter most to your job search.</p>
            </div>


        </div>

    </div>
    
    </>
  )
}
