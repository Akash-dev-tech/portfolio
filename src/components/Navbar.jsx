import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    // TASK: Write the logic to invert the current boolean state here
    setIsMenuOpen((prev)=>!prev);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-4 px-6 flex justify-between items-center">
      <h2 className="text-xl font-bold text-gray-900 tracking-tight">Portfolio</h2>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 font-medium text-gray-600">
      <li className="hover:text-blue-600 transition-colors cursor-pointer">Projects</li>
      <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
    </ul>

      {/* Mobile Toggle Button */}
      <button onClick={toggleMenu} className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md">
      Menu
    </button>

      {/* Mobile Menu Container */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden border-t border-gray-100 pb-4">
          <ul className="flex flex-col space-y-4 px-6 pt-4 text-gray-700 font-medium">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Projects</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;