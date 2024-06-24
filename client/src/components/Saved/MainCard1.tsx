import React, { useState } from 'react';
import { Job } from '../../models/model';
import { SmallCards1 } from './SmallCard1';
import { LargeCard1 } from './LargeCard1';

interface MainCardProps {
  jobs: Job[];
  initialSelectedCardContent: Job | null;
}

const MainCard1: React.FC<MainCardProps> = ({ jobs, initialSelectedCardContent }) => {
  const [selectedCardContent, setSelectedCardContent] = useState<Job | null>(initialSelectedCardContent);

  const handleCardClick = (card: Job) => {
    setSelectedCardContent(card);
  };

  return (
    <div className='maincnt' style={{ display: 'flex', height: '100vh' }}>
      <div className='smallcards1' style={{ width: '40%', overflowY: 'auto', padding: 'px', borderRight: '0.5px solid #ccc' }}>
        {jobs.map((card: Job) => (
          <div className='smallcard1'
            key={card.jobId}
            style={{
              margin: '5px 0',
              width: "100%",
              cursor: 'pointer',
              borderRadius: '0',
            }}
            onClick={() => handleCardClick(card)}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            
            <SmallCards1 content={card} />
          </div>
        ))}
      </div>
      <div className='largeconatainer' style={{ width: '80%', height: '100%', overflowY: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', border: '2px', padding: '20px 0px 10px 10px', transition: 'box-shadow 0.2s' }}>
        <div className='largecard' style={{
          width: '95%',
          height: '100vh',
          borderRadius: '0',
          border: '2px',
          padding: '10px 0px 0px 0px',
          paddingBottom: '30px',
          transition: 'box-shadow 0.2s',
        }}>
          {selectedCardContent && <LargeCard1 some={selectedCardContent} />}
        </div>
      </div>
    </div>
  );
};

export default MainCard1;
