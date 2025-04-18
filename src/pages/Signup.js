import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const { signup } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      alert('Signup successful!');
      navigate('/');
    } catch (error) {
      alert("Signup failed: " + error.message);
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <h2>📝 Create an Account</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label><br />
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div><br />
        <div>
          <label>Password:</label><br />
          <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
