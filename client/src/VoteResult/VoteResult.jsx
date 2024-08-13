import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const VoteResult = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchVotingResults = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/voted'); // Replace with your API URL
        const jsonData = await response.json();

        // Count votes for each candidate
        const voteCount = jsonData.reduce((acc, item) => {
          if (acc[item.selectedCandidate]) {
            acc[item.selectedCandidate] += 1; // Increment vote count
          } else {
            acc[item.selectedCandidate] = 1; // Initialize vote count
          }
          return acc;
        }, {});

        // Convert vote count to format required by Recharts
        const formattedData = Object.keys(voteCount).map(candidate => ({
          name: candidate,
          votes: voteCount[candidate],
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching voting results:", error);
      }
    };

    // Initial fetch and periodic updates
    fetchVotingResults();
    const interval = setInterval(fetchVotingResults, 1000); // Fetch every second

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Voting Results</h2>
      <BarChart
        width={700}
        height={400}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
        barSize={30}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis
          domain={[0, 'dataMax']}
          // tickFormatter={(value) => value.toFixed()} // Format ticks to show whole numbers
          interval="preserveStartEnd" // Ensure numbers don't duplicate
        />
        <Tooltip />
        <Legend />
        <Bar dataKey="votes" fill="#FF6347" />
      </BarChart>
    </div>
  );
};

export default VoteResult;
