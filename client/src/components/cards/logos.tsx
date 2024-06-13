import './css/logos.css'

interface logos{
    logos:{
        logo_url :string | undefined;
        company_name:string;
        website:string | undefined
        
    }
}

export const Logos = (props:logos) => {
    const randomFloat = Math.random() * (5.0 - 2.5) + 2.5;
  return (
    <div className="logos">
        <img src={props.logos.logo_url} alt="img" />
       <a href={props.logos.website}><p className='comapnynm'>{props.logos.company_name}</p></a> 
        <p className='rating'>{parseFloat(randomFloat.toFixed(1))} ★
        </p>


    </div>
  )
}
