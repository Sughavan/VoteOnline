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
    <div className="admin-login-container">
      <form onSubmit={handleLogin} className="admin-login-form">
        <h2>Admin Login</h2>
        {error && <p className="admin-login-error">{error}</p>}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
