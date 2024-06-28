import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BowlList } from './BowlList';
import './css/communitymain.css';
import lo from './images/graduation.png';
import { PostsComp } from './PostsComp';
import { Bowls } from './Bowls';
import { CommunityPost, api } from '../../models/model';



export const ComunityMain: React.FC = () => {
    const [posts, setPosts] = useState<CommunityPost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${api}community`);
                const data: CommunityPost[] = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <div className="maincommunity">
                <div className="postcont">
                    <button className='postbtn'>
                        <span className='plus'>+</span>
                        <span className='post'>Post</span>
                    </button>
                    <h2>My Bowls</h2>
                    <BowlList bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/PBYuAWuTvXP9f.jpg', name: 'PwC IAC', bowllink: 'https://www.glassdoor.co.in/Community/pwc-iac' }} />
                    <BowlList bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/035wYdyAZ9nWH.jpg', name: 'HiringInfo', bowllink: 'https://www.glassdoor.co.in/Community/hiringinfo' }} />
                    <BowlList bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/QywPmODvg7UDX.jpg', name: 'Management Consulting', bowllink: 'https://www.glassdoor.co.in/Community/management-consulting-2' }} />
                    <a href="https://www.glassdoor.co.in/Community/search/bowls">
                        <button className='expbtn'>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12.5-4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1.5 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#000"></path>
                            </svg>
                            <span className='exptxt'></span>Explore Bowls
                        </button>
                    </a>
                </div>
                <div className="communitycont">
                    <div className="search-bar">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Seach for Bowls or conversations" />
                    </div>
                    <div className='mncm'>
                        <div className='pstcon'>
                            <img className='degicon' src={lo} alt="" />
                            <input className='postt' type="text" placeholder='post as "attends "' />
                        </div>
                        <div className='scrpos'>
                            {posts.map((post) => (
                                <PostsComp  post={post} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bowlcont">
                    <p className='bowmai'>Bowls™ for you</p>
                    <a href="https://www.glassdoor.co.in/Community/search/bowls">
                        <p className='explo'>Explore All Bowls </p>
                    </a>
                    <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/18SaaIiCOZhvc.jpg', name: 'Big 4 Discussions!', desc: 'Originally this was Made for confessions. This Bowl is now' }} />
                    <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/7N3dbbQ9JjRLG.jpg', name: 'Pune Network', desc: "Physical and virtual group and 1:1 meetups for folks in Pune, India." }} />
                    <Bowls bowl={{ icon: 'https://dslntlv9vhjr4.cloudfront.net/bowls_images/cwwTrIKrzBNiO.jpg', name: 'Bangalore City', desc: "Useful Resources https://1drv.ms" }} />
                    <Bowls bowl={{ icon: 'https://www.glassdoor.com/images/bowls/headers/default-grey.png', name: 'Referral and Opportunities', desc: 'This group provide referral and job opportunities to' }} />
                </div>
            </div>
        </>
    );
};
