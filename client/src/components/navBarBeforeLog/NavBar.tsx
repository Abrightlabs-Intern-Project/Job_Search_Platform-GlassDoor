// src/components/NavBar.tsx
import React, { useState } from 'react';
import './css/NavBar.css';
import Logo from './images/glassdoor.png';
import siginicon from './images/icons8-login-48.png'

const NavBar: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = (item: string) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    return (
        <>

<nav className="navbar">
            <div className="navbar-left">
                <img src={Logo} alt="Left Icon" className="navbar-left-icon" />
            </div>
            <div className="navbar-center">
                <ul className="nav-links">
                    {['Community', 'Services', 'Jobs', 'Companies' ,'For Employers'].map(item => (
                        <li 
                            key={item} 
                            onMouseEnter={() => handleMouseEnter(item)} 
                            onMouseLeave={handleMouseLeave}
                        >
                            {item}
                            {hoveredItem === item && (
                                <div className="hover-content">
                                    {`Content for ${item}`}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-right">
                <button className="signin-button">
                    <img src={siginicon} alt="Sign In" className="signin-icon" />
                    Sign In
                </button>
            </div>
        </nav>        

        </>
        
    );
}

export default NavBar;