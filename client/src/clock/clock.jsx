import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div style={styles.clockContainer}>
      {formatTime(time)}
    </div>
  );
};

const styles = {
  clockContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'fit-content',
    height: '10vh',
    fontFamily: 'Arial, sans-serif',
    fontSize: '2em',
    color: 'black',
    backgroundColor: 'white',
    border: '5px solid black',
    padding: '20px',
    borderRadius: '10px',
  },
};

export default Clock;
