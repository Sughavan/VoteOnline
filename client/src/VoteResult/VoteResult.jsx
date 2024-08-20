import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './VoteResult.css';

const VoteResult = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchVotingResults = async () => {
      try {
        const response = await fetch('https://voteonline-7v33.onrender.com/api/voted'); 
        const jsonData = await response.json();

        const voteCount = jsonData.reduce((acc, item) => {
          if (acc[item.selectedCandidate]) {
            acc[item.selectedCandidate] += 1; 
          } else {
            acc[item.selectedCandidate] = 1; 
          }
          return acc;
        }, {});

        const formattedData = Object.keys(voteCount).map(candidate => ({
          name: candidate,
          votes: voteCount[candidate],
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching voting results:", error);
      }
    };

    fetchVotingResults();
    const interval = setInterval(fetchVotingResults, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="vote-result-container">
      <h2 className="vote-result-heading">Voting Results</h2>
      <div className="vote-result-chart-wrapper">
        <BarChart
          width={1280}
          height={560}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
          barSize={30}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#ffffff" />
          <YAxis stroke="#ffffff" />
          <Tooltip cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }} contentStyle={{ backgroundColor: '#333', borderRadius: '10px', color: '#fff' }} />
          <Legend wrapperStyle={{ color: '#ffffff' }} />
          <Bar dataKey="votes" fill="#ffa726" />
        </BarChart>
      </div>
    </div>
  );
};

export default VoteResult;
