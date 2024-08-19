import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../Images/voted.webp'
import './ThankYou.css'; // CSS file for styling

const ThankYou = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); 
  };

  return (
    <div className="thank-you-container">
      <div className="thank-you-card">
        <h1 className="thank-you-heading">Thank You for Voting!</h1>
        <p className="thank-you-message">Your vote has been recorded successfully.</p>
        
        
        {/* Giphy Placeholder */}
        <div className="giphy-container">
          <iframe
            src="https://giphy.com/embed/v9lMtd3uRbjWfz7Ppt" 
            width="100%"
            height="200"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
            title="Giphy"
          ></iframe>
        </div>

        <button
          className="thank-you-button"
          onMouseOver={(e) => e.target.style.backgroundColor = '#ff8a00'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#ffa726'}
          onClick={handleGoBack}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  )
};

export default ThankYou;
