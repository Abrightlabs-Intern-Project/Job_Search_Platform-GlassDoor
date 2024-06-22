import './css/maincompany.css'


export const MainCompany = () => {
  return (
    <>
    <div className='companyfirstdiv'>
        <center>
        <div className='empdiv'>
        <p>Have an employer in mind? </p>
        <input className='inputcompany' type="text" placeholder='Search for a Company'/>
        <button className='searchbtn'> Search</button>
    </div>
        </center>
    
    </div>
    <h1 className='expcom'>Explore Companies</h1>
    <div className='filtercomp'>
        <div className='innerdiv'>
            <div className='filterdiv'>
                <p>Filter Companies</p>
                <p>Showing Companies sorted by relevancy</p>
                <hr className='separator' />
                <p>location</p>
                <input type="text" placeholder='Location' />
                <hr className='separator' />
                <p>Industries</p>
                <input type="text" placeholder='Industries' />

            </div>
            <div className='companydiv'>

            </div>
        </div>
        

    </div>
    </>

)
}
