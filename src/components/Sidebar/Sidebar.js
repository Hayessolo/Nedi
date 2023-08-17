import React from 'react';
import '../../styles/components/Sidebar/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <nav className="navigation">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/patients">Patients</a></li>
          <li><a href="/appointments">Appointments</a></li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
