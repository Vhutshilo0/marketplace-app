import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <h2>👤 My Profile</h2>

      <div style={{ backgroundColor: '#f5f5f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
        <p><strong>Email:</strong> {currentUser?.email}</p>
        <p><strong>User ID:</strong> {currentUser?.uid}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={() => navigate('/edit-profile')} className="btn-primary">✏️ Edit Profile</button>
        <button onClick={() => navigate('/settings')} className="btn-primary">⚙️ Settings</button>
        <button onClick={() => navigate('/my-listings')} className="btn-primary">📦 My Listings</button>
        <button onClick={handleLogout} className="btn-danger">🚪 Logout</button>
      </div>
    </div>
  );
}

export default Profile;
