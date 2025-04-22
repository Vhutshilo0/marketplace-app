import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav style={{ backgroundColor: '#007bff', padding: '12px 0' }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        color: 'white'
      }}>
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          <Link to="/" style={navLink}>Home</Link>
          {currentUser && (
            <>
              <Link to="/post" style={navLink}>Post Item</Link>
              <Link to="/profile" style={navLink}>Profile</Link>
            </>
          )}

          {/* Browse Dropdown */}
          <div className="dropdown">
            <span style={{ ...navLink, cursor: 'pointer' }}>Browse</span>
            <div className="dropdown-content">
              <Link to="/category/accessories">Accessories</Link>
              <Link to="/category/vehicles">Vehicles</Link>
              <Link to="/category/property">Property</Link>
              <Link to="/category/fashion">Fashion</Link>
              <Link to="/category/electronics">Electronics</Link>
              <Link to="/category/furniture">Furniture</Link>
              <Link to="/category/books">Books</Link>
              <Link to="/category/others">Others</Link>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '15px' }}>
          {currentUser ? (
            <button onClick={handleLogout} style={logoutButton}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" style={navLink}>Login</Link>
              <Link to="/signup" style={navLink}>Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

const navLink = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: '500'
};

const logoutButton = {
  backgroundColor: 'white',
  color: '#007bff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default Navbar;