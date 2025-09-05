import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.webp";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-lg py-4 py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          {/* <Heart className="w-8 h-8 text-[#f05f75] group-hover:scale-110 transition-transform duration-300" />
          <span
            className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Mahi Events
          </span> */}

          <img src={logo} alt="" style={{ height: "50px" }} />
        </Link>

        <nav className="hidden md:flex space-x-8">
          {[
            { path: "/", label: "Home" },
            { path: "/services", label: "Services" },
            { path: "/gallery", label: "Gallery" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`font-medium transition-all duration-300 hover:text-[#f05f75] ${
                isActive(path)
                  ? "text-[#f05f75]"
                  : isScrolled
                  ? "text-gray-800"
                  : "text-gray-800"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden transition-colors duration-300 ${
            isScrolled ? "text-gray-800" : "text-white"
          }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white transition-all duration-300 ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 space-y-4">
          {[
            { path: "/", label: "Home" },
            { path: "/services", label: "Services" },
            { path: "/gallery", label: "Gallery" },
            { path: "/contact", label: "Contact" },
          ].map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMenuOpen(false)}
              className={`block font-medium transition-colors duration-300 hover:text-[#f05f75] ${
                isActive(path) ? "text-[#f05f75]" : "text-gray-800"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
