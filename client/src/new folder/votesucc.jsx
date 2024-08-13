import React from 'react';
import './votesucc.css';

const VoteSuccess = () => {
  const handleLogout = () => {
  
  };

  return (
    <div className="vote-success-container">
      <h1 className="vote-success-heading"><b>Voted Successfully</b></h1>
      <br />
      <button className="vote-success-button" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i> LogOut
      </button>
    </div>
  );
};

export default VoteSuccess;
