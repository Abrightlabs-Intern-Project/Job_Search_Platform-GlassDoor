// src/components/TabNavBar.tsx
import React  from 'react';
import './css/TabNavBar.css';

const TabNavBar: React.FC = () => {

    return (
        <div>
            <p className='res-text'><center>Upload your CV - let employers find you</center> </p>
            <div className="tab-navbar">
                <div className="tab-item">For You</div>
                <div className="tab-item">Search</div>
                <div className="tab-item">Activity</div>
            </div>
            <hr className='jobsep'/>

        </div>
    );
}

export default TabNavBar;