// src/components/SearchBar.tsx
import React from 'react';
import { FaSearch } from 'react-icons/fa';
// import { FaLocationDot } from "react-icons/fa6";
import './css/SearchBar.css';

const SearchBar: React.FC = () => {
    return (
        <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text one" placeholder="Search..." />
            {/* <FaLocationDot className="search-icon loca" />
            <input type="text two" placeholder="Search..." /> */}
        </div>
    );
}

export default SearchBar;