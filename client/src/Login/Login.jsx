import React from 'react';
import './Login.css'; 

const Login = () => {
  const handleBack = () => {
    window.location.href = "index.html";
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <form action="login.php" method="POST">
        <center>
          <input
            type="email"
            name="sEmail"
            required
            placeholder="Email"
          /><br />
          <input
            type="date"
            name="sDOB"
            required
            placeholder="sDate Of Birth"
          /><br />
          <input
            type="password"
            name="sPassword"
            required
            placeholder="Password"
          /><br />
          <button type="submit">Submit</button><br />
          {/* <a href="admin.html">or Admin Login?</a> */}
        </center>
      </form>
      <button className="open-button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default Login;
