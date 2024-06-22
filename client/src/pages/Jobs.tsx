// import React, { useState, useEffect } from 'react';
// import NavigationBar from "../components/Afterlogin/NavigationBar";
// import MainCard from "../components/cards/MainCard";
// import { FaSearch } from 'react-icons/fa';
// import './css/search.css';
// import { Searchfilter } from "../components/Search/Searchfilter";
// import { SavedPages } from "../components/Saved/SavedPages";
// import { Job } from '../models/model';

// const JobPage: React.FC = () => {
//     const [activeTab, setActiveTab] = useState<'foryou' | 'search' | 'saved'>('foryou');
//     const [jobs, setJobs] = useState<Job[]>([]);
//     const [selectedCardContent, setSelectedCardContent] = useState<Job | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchJobs = async () => {
//             try {
//                 const response = await fetch('http://localhost:3000/jobs');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch jobs');
//                 }
//                 const data: Job[] = await response.json();
//                 setJobs(data);
//                 if (data.length > 0) {
//                     setSelectedCardContent(data[0]);
//                 }
//             } catch (error: any) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchJobs();
//     }, []);

//     const handleTabClick = (tab: 'foryou' | 'search' | 'saved') => {
//         setActiveTab(tab);
//     };

//     if (loading) {
//         return (
//             <div className="loading-container">
//                 <p>Loading...</p>
//             </div>
//         );
//     }

//     if (error) {
//         return (
//             <div className="error-container">
//                 <p>Error: {error}</p>
//             </div>
//         );
//     }

//     return (
//       <>
//         <NavigationBar />

//         {/* search bar */}
//         <div className="search-bar1">
//             <FaSearch className="search-icon" />
//             <input type="text" placeholder="Search..." />
//         </div>

//         {/* tab navigation bar */}
//         <div>
//             <p className='res-text'><center>Upload your CV - let employers find you</center></p>
//             <div className="tab-navbar">
//                 <div 
//                     className={`tab-item ${activeTab === 'foryou' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('foryou')}
//                 >
//                     For You
//                 </div>
//                 <div 
//                     className={`tab-item ${activeTab === 'search' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('search')}
//                 >
//                     Search
//                 </div>
//                 <div 
//                     className={`tab-item ${activeTab === 'saved' ? 'active' : ''}`}
//                     onClick={() => handleTabClick('saved')}
//                 >
//                     Activity
//                 </div>
//             </div>
//             <hr className='jobsep' />
//         </div>

//         {activeTab === 'foryou' && <MainCard jobs={jobs} initialSelectedCardContent={selectedCardContent} />}
//         {activeTab === 'search' && (
//             <>
//                 <Searchfilter />
//                 <MainCard jobs={jobs} initialSelectedCardContent={selectedCardContent} />
//             </>
//         )}
//         {activeTab === 'saved' && <SavedPages />}
//       </>
//     );
// }

// export default JobPage;



import React, { useState, useEffect } from 'react';
import NavigationBar from "../components/Afterlogin/NavigationBar";
import MainCard from "../components/cards/MainCard";
import { FaSearch, FaTimes } from 'react-icons/fa';
import './css/search.css';
import { Searchfilter } from "../components/Search/Searchfilter";
import { SavedPages } from "../components/Saved/SavedPages";
import { Job } from '../models/model';

const JobPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'foryou' | 'search' | 'saved'>('foryou');
    const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedCardContent, setSelectedCardContent] = useState<Job | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:3000/jobs');
                if (!response.ok) {
                    throw new Error('Failed to fetch jobs');
                }
                const data: Job[] = await response.json();
                setJobs(data);
                if (data.length > 0) {
                    setSelectedCardContent(data[0]);
                }
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleTabClick = (tab: 'foryou' | 'search' | 'saved') => {
        setActiveTab(tab);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
    };

    const filteredJobs = jobs.filter(job =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="loading-container">
                <p>Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
      <>
        <NavigationBar />

        {/* search bar */}
        <div className="search-bar1">
            <FaSearch className="search-icon" />
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
            {searchTerm && (
                <FaTimes className="clear-icon" onClick={handleClearSearch} />
            )}
        </div>

        {/* tab navigation bar */}
        <div>
            <p className='res-text'><center>Upload your CV - let employers find you</center></p>
            <div className="tab-navbar">
                <div
                    className={`tab-item ${activeTab === 'foryou' ? 'active' : ''}`}
                    onClick={() => handleTabClick('foryou')}
                >
                    For You
                </div>
                <div
                    className={`tab-item ${activeTab === 'search' ? 'active' : ''}`}
                    onClick={() => handleTabClick('search')}
                >
                    Search
                </div>
                <div
                    className={`tab-item ${activeTab === 'saved' ? 'active' : ''}`}
                    onClick={() => handleTabClick('saved')}
                >
                    Activity
                </div>
            </div>
            <hr className='jobsep' />
        </div>

        {activeTab === 'foryou' && <MainCard jobs={filteredJobs} initialSelectedCardContent={selectedCardContent} />}
        {activeTab === 'search' && (
            <>
                <Searchfilter />
                <MainCard jobs={filteredJobs} initialSelectedCardContent={selectedCardContent} />
            </>
        )}
        {activeTab === 'saved' && <SavedPages />}
      </>
    );
}

export default JobPage;
