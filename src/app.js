import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PostItem from './pages/PostItem';

function App() {
  return (
    <Router>
      <div style={{ padding: 40 }}>
        <h1 style={{ color: 'blue' }}>🔥 The App is finally Running!</h1>
        <Routes>
          <Route path="/" element={<p>This is the home page.</p>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/post" element={<PostItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;