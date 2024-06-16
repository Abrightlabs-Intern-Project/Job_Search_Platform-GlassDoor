import './css/postcomp.css'
import share from './images/share.png'
import like from './images/heart.png'
import comment from './images/chat.png'
export const PostsComp = () => {
  return (
<>

<div className="postmn">
    <p className='fresh'>Fresh</p>
    <div className='bowic'>
        <img className ='bowim' src="https://dslntlv9vhjr4.cloudfront.net/bowls_images/PBYuAWuTvXP9f.jpg" alt="" />
        <div className='disflex'>
            <div className='con'>
                <p className='maintext'>PwC IAC</p>
                <p className='subtext'>Associate-hr</p>
            </div>
            <p className='publi'>1d </p>
        </div>

    </div>
    <div className='contents'>
        <p>What is the general hike percentage in Pwc. I have now joined as a senior associate2 in month of Jan-2024 and my current CTC was 21L and Snapshot rating shows "AT Level", CLient Utilization-64%</p>

    </div>
    <div className='social'>
<div className='socialcon'>
    <img className ='iconssty' src={like} alt="" />
    <div className='icontxt'>
        Likes
    </div>
</div>

<div className='socialcon'>
<img className ='iconssty' src={comment} alt="" />

    <div className='icontxt'>
        Comments
    </div>
</div>

<div className='socialcon'>
<img  className ='iconssty' src={share} alt="" />

    <div className='icontxt'>
        Shares
    </div>
</div>





    </div>
<div>

</div>

</div>
</>  


)
}
