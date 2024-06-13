import { Job } from "../../models/model"
import './css/smallCard.css'

interface details{
    content :Job
}

export const SmallCards = (props:details) => {
  return (
    <> 
    <p>{props.content.company_name}</p>
    <p>{props.content.job_title}</p>
    <img className="logo" src={props.content.company_logo} alt="" />
    <p>{props.content.location}</p>
    {/* <p>{props.content.application_url}</p> */}

    </>
  )
}
