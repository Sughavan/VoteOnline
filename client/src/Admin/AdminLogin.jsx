import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const adminUsername = 'vijay';
    const adminPassword = '12';
    const adminUsername1 = 'sughavan';
    const adminPassword1 = '34';
    const adminUsername2 = 'siva';
    const adminPassword2 = '56';

    if (username === adminUsername && password === adminPassword) {
      navigate('/admin'); // Redirect to the admin page
    } 
    else if(username === adminUsername1 && password === adminPassword1)
    {
      navigate('/admin');
    }
    else if(username === adminUsername2 && password === adminPassword2)
    {
      navigate('/admin');
    }
    else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleLogin} style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', width: '300px' }}>
        <h2><center>Admin Login</center></h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div style={{ marginBottom: '15px' }}>
          <label   style={{ display: 'block', marginBottom: '5px' }}>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label  style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            required
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '5px' }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
