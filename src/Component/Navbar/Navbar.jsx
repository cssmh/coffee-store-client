import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import photo from "../../assets/more/logo1.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#4f2516] sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={photo} className="w-7" alt="Coffee Master Logo" />
          <h1 className="text-2xl text-white ml-3 font-semibold">Coffee Master</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/products"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#4f2516] py-3 z-50">
          <nav className="space-y-2">
            <Link
              to="/"
              className="block text-white text-center hover:bg-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block text-white text-center hover:bg-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/products"
              className="block text-white text-center hover:bg-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="block text-white text-center hover:bg-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
