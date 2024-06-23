// import { CompanyCard } from './CompanyCard'
// import './css/maincompany.css'


// export const MainCompany = () => {
//   return (
//     <>
//     <div className='companyfirstdiv'>
//         <center>
//         <div className='empdiv'>
//         <p>Have an employer in mind? </p>
//         <input className='inputcompany' type="text" placeholder='Search for a Company'/>
//         <button className='searchbtn'> Search</button>
//     </div>
//         </center>
    
//     </div>
//     <h1 className='expcom'>Explore Companies</h1>
//     <div className='filtercomp'>
//         <div className='innerdiv'>
//             <div className='filterdiv'>
//                 <p>Filter Companies</p>
//                 <p>Showing Companies sorted by relevancy</p>
//                 <hr className='separator' />
//                 <p>location</p>
//                 <input type="text" placeholder='Location' />
//                 <hr className='separator' />
//                 <p>Industries</p>
//                 <input type="text" placeholder='Industries' />

//             </div>
//             <div className='companydiv'>
//                 <CompanyCard />
//                 <CompanyCard />
//                 <CompanyCard />
//                 <CompanyCard />
//             </div>
//         </div>
        

//     </div>
//     </>

// )
// }
import  { useEffect, useState } from 'react';
import { CompanyCard } from './CompanyCard';
import './css/maincompany.css';

export const MainCompany = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/company')
      .then(response => response.json())
      .then(data => setCompanies(data))
      .catch(error => console.error('Error fetching company data:', error));
  }, []);

  return (
    <>
      <div className='companyfirstdiv'>
        <center>
          <div className='empdiv'>
            <p>Have an employer in mind?</p>
            <input className='inputcompany' type="text" placeholder='Search for a Company' />
            <button className='searchbtn'>Search</button>
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
            <p>Location</p>
            <input type="text" placeholder='Location' />
            <hr className='separator' />
            <p>Industries</p>
            <input type="text" placeholder='Industries' />
          </div>
          <div className='companydiv'>
            {companies.map(company => (
              <CompanyCard  company={company} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
