import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/layout/footer';
import Navbar from './components/layout/navbar';
import Content from './components/layout/content';
import './assets/sass/main.scss';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Content />
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
