import { Company } from '../../models/model'
import './css/companycard.css'
interface company{
    company :Company
}

export const CompanyCard = (props:company) => {
  return (
    <>
    <div className='body'>
    <div className="company-card">
        <div className="header">
            <img src={props.company.iconUrl} alt="Company Logo" />
            <div className="company-info">
                <p className="company-name">{props.company.companyName}</p>
                <div className="rating">
                    <i className="fas fa-star"></i>
                    <span>{props.company.rating }  ★</span>
                </div>
            </div>

            <div className="stats">
                <div className="detailstats">
                    <center><strong>1.8L</strong></center>
                    <center><p className='cntdel'>Reviews</p></center>
                </div>
                <div className="detailstats">
                <center><strong>94.6t</strong></center>

                   <center><p className='cntdel'>Salaries</p></center> 
                </div>
                <div className="detailstats">
                <center><strong>80.9T</strong></center>
                <center><p className='cntdel'>Jobs</p></center>
                    
                </div>
            </div>
        </div>
        <div className="details">
            <div className="detail detail1">
                <strong>Location</strong>
                {props.company.location}
            </div>
            <div className="detail">
                <strong>Global Company Size</strong>
                {props.company.companySize}+ Employees
            </div>
            <div className="detail">
                <strong>Industry</strong>
                {props.company.industry}
            </div>
        </div>
        <div>
            <strong>Description</strong>
            <p className="description">{props.company.description}...</p>
        </div>
    </div>
    </div>
    </>
  )
}
