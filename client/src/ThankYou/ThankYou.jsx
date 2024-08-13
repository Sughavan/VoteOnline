import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Redirect to the homepage or any other page
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Thank You for Voting!</h1>
        <p style={styles.message}>Your vote has been recorded successfully.</p>
        <button
          style={styles.button}
          onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
          onClick={handleGoBack}
        >
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #e0eafc, #cfdef3)',
    padding: '0 20px',
  },
  card: {
    background: 'white',
    padding: '40px 30px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
  },
  heading: {
    fontSize: '2.2em',
    color: '#333',
    marginBottom: '20px',
    fontWeight: '700',
  },
  message: {
    fontSize: '1.2em',
    color: '#555',
    marginBottom: '30px',
    lineHeight: '1.5',
  },
  button: {
    padding: '12px 30px',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '1em',
    fontWeight: '600',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    width: '100%',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default ThankYou;
