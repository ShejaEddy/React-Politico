import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router';
import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar';
import './assets/css/main.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
