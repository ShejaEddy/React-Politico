import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>CONTACT US</li>
        <li>+250784141587</li>
      </ul>

      <ul className="social-icons">
        <li>
          <a className="facebook" href="https://www.facebook.com/sheja.eddy">
            <i className="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a className="twitter" href="https://twitter.com/EddySheja">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/sheja-eddy-5367b6192/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <div className="copy">
        Copyright &copy; 2020 All Rights Reserved by Politico
      </div>
    </div>
  );
};

export default Footer;
