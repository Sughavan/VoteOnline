import React from 'react';
import './Election.css';
import { useNavigate } from 'react-router-dom';

const elections = [
  { name: 'Presidential Election', date: '2024-11-05', candidates: 4, state: 'TamilNadu' },
  { name: 'State Governor Election', date: '2024-11-05', candidates: 8, state: 'Karnataka' },
  { name: 'State Election', date: '2024-11-05', candidates: 3, state: 'Maharastra' },
  { name: 'Local Council Election', date: '2024-11-05', candidates: 10, state: 'New Delhi' }
];

const Election = () => {
  const navi = useNavigate();

  const handle = () => {
    navi('/Cand');
  };

  return (
    <div className="container">
      <h1  className="header">Elections</h1>
      <div className="cont">
        {elections.map((election, index) => (
          <div key={index} className="cont1">
            <h2>{election.name}</h2>
            <p>Date: {election.date}</p>
            <p>Number of Candidates: {election.candidates}</p>
            <p>State: {election.state}</p>
            <button onClick={handle} className='button'>View details</button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Election;
