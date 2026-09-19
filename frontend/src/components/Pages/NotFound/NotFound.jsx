import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from "../../Shared/ThemeContext/ThemeContext";
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    const { isDarkTheme } = useTheme();

    return (
        <div className={`notfound-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            <div className="notfound-content">
                <h1 className="notfound-title">404</h1>
                <div className="notfound-divider"></div>
                <h2 className="notfound-subtitle">Jurisdiction Not Found</h2>
                <p className="notfound-desc">
                    The legal document or page you are trying to access does not exist, has been moved, or is currently unavailable.
                </p>
                <button className="apple-btn notfound-btn" onClick={() => navigate('/')}>
                    Return to Chambers
                </button>
            </div>
        </div>
    );
};

export default NotFound;
