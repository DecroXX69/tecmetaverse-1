import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <Router>
    
      <Home/>
    
    
    </Router>
  );
}

export default App;
