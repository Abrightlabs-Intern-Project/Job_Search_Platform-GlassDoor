import { FaSearch } from 'react-icons/fa'
import { BowlList } from './BowlList'
import './css/communitymain.css'
import lo from './images/graduation.png'
import { PostsComp } from './PostsComp'
import { Bowls } from './Bowls'

export const ComunityMain = () => {
  return (
    <>
    <div className="maincommunity">
    <div className="postcont">
        <button className='postbtn'> <span className='plus'>+</span> <span className='post'>Post</span></button>
        <h2>My Bowls</h2>
        <BowlList bowl = {{icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/PBYuAWuTvXP9f.jpg' , name:'PwC IAC' , bowllink:'https://www.glassdoor.co.in/Community/pwc-iac'}}/>
        <BowlList bowl = {{icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/PBYuAWuTvXP9f.jpg' , name:'PwC IAC' , bowllink:'https://www.glassdoor.co.in/Community/pwc-iac'}}/>
    <a href="https://www.glassdoor.co.in/Community/search/bowls"><button className='expbtn'>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12.5-4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1.5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#000"></path></svg>
        <span className='exptxt'></span>Explore Bowls
        </button></a>
    
    </div>
    <div className="communitycont">
        <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text one" placeholder="Seach for Bowls or conversations" />
        </div>
        <div className='mncm'>
            <div className='pstcon'>
              <img className='degicon' src={lo} alt="" />
              <input className='postt' type="text"  placeholder='post as "attends "'/>

            </div>
            <div className='scrpos'>
                <PostsComp />
                <PostsComp />
                <PostsComp />
                <PostsComp />
                <PostsComp />
                <PostsComp />
                <PostsComp />
                <PostsComp />




            </div>

        </div>


    </div>
    <div className="bowlcont">
    <p className='bowmai'>Bowls™ for you</p>
    <a href="https://www.glassdoor.co.in/Community/search/bowls"><p className='explo'>Explore All Bowls </p></a>
        <Bowls />
        <Bowls />
        <Bowls />
        {/* <Bowls /> */}
        
    </div>
    </div>
    
    </>
  )
}
