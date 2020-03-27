import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/index.css';

function Index() {
  return (
    <div className="landing-page content">
      <div className="intro-container">
        <p className="intro-text">Welcome to Politico platform,</p>
        <p className="body-text">
          Let us all become good patrioteers by casting our votes to the best
          candidate so as to improve not only our future but mostly our today
          first.
        </p>
      </div>
      <Link
        to="/login"
        className="start d-flex align-items-center justify-content-center"
      >
        Start Voting
        <i className="fas fa-arrow-right"></i>
      </Link>
    </div>
  );
}

export default Index;
