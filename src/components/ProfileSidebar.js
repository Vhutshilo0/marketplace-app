import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProfileSidebar({ onClose }) {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="profile-sidebar-overlay">
      <div className="profile-sidebar-panel">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>👤 {currentUser?.email}</h3>
          <button onClick={onClose} style={{ fontSize: '20px', background: 'none', border: 'none', cursor: 'pointer' }}>✖️</button>
        </div>
        <ul>
          <li onClick={() => { navigate('/edit-profile'); onClose(); }}>✏️ Edit Profile</li>
          <li onClick={() => { navigate('/settings'); onClose(); }}>⚙️ Settings</li>
          <li onClick={() => { navigate('/my-listings'); onClose(); }}>📦 My Listings</li>
          <li onClick={handleLogout} className="logout-link">🚪 Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileSidebar;
