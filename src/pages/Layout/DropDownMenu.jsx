import React, { useState } from 'react';
import '../Layout/layoutcss/DropdownMenu.css';
import { Link } from 'react-router-dom';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <li><Link to="/home/projects" >My Projects</Link></li>
        <li><Link to="/home/projects/epics">My Epics</Link></li>
        <li><Link to="/home/projects/epics/task">My Task</Link></li>
        <li><Link to="/">Settings</Link></li>
      </ul>
    </div>
  );
}

export default DropdownMenu;