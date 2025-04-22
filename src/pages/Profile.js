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
    <div className="profile-layout">
      <div className="profile-sidebar">
        <h3>👤 {currentUser?.email}</h3>
        <ul>
          <li onClick={() => navigate('/edit-profile')}>✏️ Edit Profile</li>
          <li onClick={() => navigate('/settings')}>⚙️ Settings</li>
          <li onClick={() => navigate('/my-listings')}>📦 My Listings</li>
          <li onClick={handleLogout} className="logout-link">🚪 Logout</li>
        </ul>
      </div>

      <div className="profile-content">
        <h2>Welcome back 👋</h2>
        <p>Select an option from the sidebar.</p>
      </div>
    </div>
  );
}

export default Profile;
