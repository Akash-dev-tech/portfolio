import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    // TASK: Write the logic to invert the current boolean state here
    setIsMenuOpen((prev)=>!prev);
  };

  return (
    <nav>
      <h2>Portfolio</h2>
      
      {/* Desktop Menu */}
      <ul>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Mobile Toggle Button */}
      <button onClick={toggleMenu}>
        Menu
      </button>

      {/* Mobile Menu Container */}
      {isMenuOpen && (
        <div>
          <ul>
            <li>Projects (Mobile)</li>
            <li>Contact (Mobile)</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;