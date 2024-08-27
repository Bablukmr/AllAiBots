import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PageLayout from './components/PageLayout';

function App() {
  return (
    <Router>
      <div>
        <PageLayout />
      </div>
    </Router>
  );
}

export default App;