import React, { useState } from 'react';
import '../Layout/layoutcss/DropdownMenu.css';

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
        <li>My Projects</li>
        <li>My Epics</li>
        <li>My Task</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;