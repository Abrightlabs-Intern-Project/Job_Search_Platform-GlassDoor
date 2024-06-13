import React, { useState, useEffect } from 'react';
import './css/cards.css';
import { SmallCards } from './SmallCards';
import { LargeCard } from './LargeCard';
import { useQuery } from '@apollo/client';
import { getAllJobs } from './queries';
import { Job } from '../../models/model';

const Demos: React.FC = () => {
  const { loading, error, data } = useQuery<{ getAllJobs: Job[] }>(getAllJobs);

  const [selectedCardContent, setSelectedCardContent] = useState<Job | null>(null);

  useEffect(() => {
    if (data && data.getAllJobs.length > 0) {
      setSelectedCardContent(data.getAllJobs[0]);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const jobs: Job[] = data?.getAllJobs || [];

  const handleCardClick = (card: Job) => {
    setSelectedCardContent(card);
  };

  return (
    <div className='maincnt' style={{ display: 'flex', height: '100vh' }}>
      <div className='smallcards' style={{ width: '40%', overflowY: 'auto', padding: '10px', borderRight: '1px solid #ccc' }}>
        {jobs.map((card: Job) => (
          <div className='smallcard'
            key={card.id}
            style={{
              padding: '0px',
              margin: '10px 0',
              width: "90%",
              cursor: 'pointer',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onClick={() => handleCardClick(card)}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <SmallCards content={card} />
          </div>
        ))}
      </div>
      <div className='largeconatainer' style={{ width: '80%', height: '100%', overflowY: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', border: '2px', padding: '20px 0px 10px 10px', transition: 'box-shadow 0.2s' }}>
        <div className='largecard' style={{
          width: '90%',
          height: '100vh',
          borderRadius: '10px',
          border: '2px',
          padding: '20px 0px 10px 10px',
          paddingBottom: '30px',
          transition: 'box-shadow 0.2s',
        }}>
          {selectedCardContent && <LargeCard some={selectedCardContent} />}
        </div>
      </div>
    </div>
  );
};

export default Demos;
