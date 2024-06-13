import React, { useState } from 'react';
import './css/cards.css'
import { SmallCards } from './SmallCards';
import { LargeCard } from './LargeCard';
import { useQuery } from '@apollo/client';
import { getAllJobs } from './queries';
import { Job } from '../../models/model';




const Demos: React.FC = () => {

  const { loading, error, data } = useQuery<{ data: Job[] }>(getAllJobs);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const jobs :Job[] = data?.getAllJobs;
  console.log(jobs[0])

  const [selectedCardContent, setSelectedCardContent] = useState(jobs[0]);

  const handleCardClick = (card: Job) => {
    setSelectedCardContent(card);
  };

  return (
    <div className='maincnt' style={{ display: 'flex', height: '100vh', width:'' }}>
      <div className = 'smallcards' style={{ width: '40%', overflowY: 'auto', padding: '10px', borderRight: '1px solid #ccc'}}>
        {jobs.map((card: Job) => (
          <div className = 'smallcard'
            key={card.id}
            style={{
              padding: '0px',
              margin: '10px 0',
              // backgroundColor: '#f0f0f0',
              width:"90%",
              cursor: 'pointer',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onClick={() => handleCardClick(card)}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {/* {`Card ${card.id}`} */}
            <SmallCards  content ={card}/>
          </div>
        ))}
      </div>
      <div className= 'largeconatainer' style={{ width: '80%',height:'100%' ,overflowY: 'auto' , display: 'flex', justifyContent: 'center',paddingBottom:'30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
       borderRadius: '10px',
       border:'2px',
       padding: '20px 0px 10px 10px',
          transition: 'box-shadow 0.2s',}}>
        <div className= 'largecard' style={{
          width: '90%',
          height: '100vh',
          // backgroundColor: '#e0e0e0',
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          borderRadius: '10px',
          border:'2px',
          padding: '20px 0px 10px 10px',
          paddingBottom:'30px',
          // boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'box-shadow 0.2s',
        }}>
          {/* {selectedCardContent} */}
          <LargeCard  some = {selectedCardContent}/>
        </div>
      </div>
    </div>
  );
};

export default Demos;
