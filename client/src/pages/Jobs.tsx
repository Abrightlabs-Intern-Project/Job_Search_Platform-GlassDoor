import React, { useState, useEffect } from 'react';
import NavigationBar from "../components/Afterlogin/NavigationBar";
import MainCard from "../components/cards/MainCard";
import { FaMapMarkerAlt, FaSearch, FaTimes } from 'react-icons/fa';
import './css/search.css';
import { Job } from '../models/model';
import SavedNav from '../components/Saved/SavedNav';

const JobPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'foryou' | 'search' | 'saved'>('foryou');
    const [jobs, setJobs] = useState<Job[]>([]);
    const [selectedCardContent, setSelectedCardContent] = useState<Job | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [locationTerm, setLocationTerm] = useState<string>('');
    const [showRatingPopup, setShowRatingPopup] = useState<boolean>(false);
    const [showDatePostedPopup, setShowDatePostedPopup] = useState<boolean>(false);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [selectedDatePosted, setSelectedDatePosted] = useState<'anytime' | 'mostrecent'>('anytime');
    const [easyApply, setEasyApply] = useState<boolean>(false);
    const [hasRemote, setHasRemote] = useState<boolean>(false);

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

    const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocationTerm(e.target.value);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setLocationTerm('');
    };

    const handleRatingFilterClick = () => {
        setShowRatingPopup(!showRatingPopup);
    };

    const handleDatePostedFilterClick = () => {
        setShowDatePostedPopup(!showDatePostedPopup);
    };

    const handleRatingSelect = (rating: number) => {
        setSelectedRating(rating);
        setShowRatingPopup(false);
    };

    const handleDatePostedSelect = (datePosted: 'anytime' | 'mostrecent') => {
        setSelectedDatePosted(datePosted);
        setShowDatePostedPopup(false);
    };

    const handleEasyApplyClick = () => {
        setEasyApply(!easyApply);
    };

    const handleHasRemoteClick = () => {
        setHasRemote(!hasRemote);
    };

    const handleClearFilters = () => {
        setSelectedRating(null);
        setSelectedDatePosted('anytime');
        setEasyApply(false);
        setHasRemote(false);
    };

    const filteredJobs = jobs.filter(job => {
        return (
            job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
            job.location.toLowerCase().includes(locationTerm.toLowerCase()) &&
            (selectedRating === null || job.company.rating >= selectedRating) &&
            (!easyApply || job.easyApply) &&
            (!hasRemote || job.hasRemote)
        );
    }).sort((a, b) => {
        if (selectedDatePosted === 'mostrecent') {
            return new Date(b.published).getTime() - new Date(a.published).getTime();
        }
        return 0;
    });

    const generateJobsCountText = () => {
        // const totalJobs = jobs.length;
        const filteredJobsCount = filteredJobs.length;
        let text = `${filteredJobsCount} jobs found`;

        if (searchTerm && locationTerm) {
            text += ` for "${searchTerm}" in "${locationTerm}"`;
        } else if (searchTerm) {
            text += ` for "${searchTerm}"`;
        } else if (locationTerm) {
            text += ` in "${locationTerm}"`;
        }

        return text;
    };

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
                <div className="search-input-wrapper">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search job title..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    {searchTerm && (
                        <FaTimes className="clear-icon" onClick={handleClearSearch} />
                    )}
                </div>
                <div className="location-input-wrapper">
                    <FaMapMarkerAlt className="location-icon" />
                    <input
                        type="text"
                        placeholder="Location..."
                        value={locationTerm}
                        onChange={handleLocationChange}
                    />
                    {locationTerm && (
                        <FaTimes className="clear-icon" onClick={handleClearSearch} />
                    )}
                </div>
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
                    <div className="filterbuttons">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.83 17a3.001 3.001 0 0 1-5.66 0H3a1 1 0 1 1 0-2h10.17a3.001 3.001 0 0 1 5.66 0H21a1 1 0 1 1 0 2h-2.17ZM16 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5.17-8a3.001 3.001 0 0 1-5.66 0H3a1 1 0 0 1 0-2h2.17a3.001 3.001 0 0 1 5.66 0H21a1 1 0 1 1 0 2H10.83ZM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="#000"></path></svg>
                        <button className={`butn ${easyApply ? 'active' : ''}`} onClick={handleEasyApplyClick}>
                            Easy Apply Only
                        </button>
                        <button className={`butn ${hasRemote ? 'active' : ''}`} onClick={handleHasRemoteClick}>
                            Remote Only
                        </button>
                        <button className='butn' onClick={handleRatingFilterClick}>
                            Company Rating 
                        </button>
                        <button className='butn' onClick={handleDatePostedFilterClick}>
                            Date Posted
                        </button>
                        <button className='butn' onClick={handleClearFilters}>
                            Clear Filters
                        </button>
                    </div>
                    {showRatingPopup && (
                        <div className="rating-popup">
                            <button onClick={() => handleRatingSelect(1)}>★ ☆ ☆ ☆ ☆ and up</button>
                            <button onClick={() => handleRatingSelect(2)}>★ ★ ☆ ☆ ☆ and up</button>
                            <button onClick={() => handleRatingSelect(3)}>★ ★ ★ ☆ ☆ and up</button>
                            <button onClick={() => handleRatingSelect(4)}>★ ★ ★ ★ ☆ and up</button>
                        </div>
                    )}
                    {showDatePostedPopup && (
                        <div className="dateposted-popup">
                            <button onClick={() => handleDatePostedSelect('anytime')}>Any time</button>
                            <button onClick={() => handleDatePostedSelect('mostrecent')}>Most Recent</button>
                        </div>
                    )}
                    <p className='jobscount'>{generateJobsCountText()}</p>
                    <MainCard jobs={filteredJobs} initialSelectedCardContent={selectedCardContent} />
                </>
            )}
            {activeTab === 'saved' && <SavedNav />}
        </>
    );
}

export default JobPage;
