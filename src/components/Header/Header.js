import React from 'react';
import logo from '../../assets/images/logo.jpg';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Nedi Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/patients">Patients</a></li>
          <li><a href="/appointments">Appointments</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </header>
  );
}


export default Header;
