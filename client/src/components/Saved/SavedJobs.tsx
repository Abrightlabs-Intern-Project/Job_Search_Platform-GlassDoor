import React, { useEffect, useState } from 'react';
import { Job } from '../../models/model';
import MainCard1 from './MainCard1';

export const SavedJobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:3000/jobs');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Job[] = await response.json();
        setJobs(data);
      } catch (error) {
        setError('Error fetching jobs');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {jobs.length > 0 ? (
        <MainCard1 initialSelectedCardContent={jobs[0]} jobs={jobs} />
      ) : (
        <div>No jobs available</div>
      )}
    </>
  );
};
