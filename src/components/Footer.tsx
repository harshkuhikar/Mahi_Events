import React from "react";
import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "../images/logo.webp";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f05f75] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <Heart className="w-8 h-8" />
              <span className="text-2xl font-bold">Mahi Events</span> */}
              <img src={logo} alt="" style={{ height: "75px" }} />
            </div>
            <p className="text-pink-100 mb-4">
              Creating unforgettable memories with style and elegance. Your
              dream event is our passion.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#1abc9c] transition-colors duration-300"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#1abc9c] transition-colors duration-300"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#1abc9c]" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#1abc9c]" />
                <span>info@mahievents.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#1abc9c]" />
                <span>Alankar Complex, Maninagar, Ahmedabad</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>Wedding Planning</li>
              <li>Corporate Events</li>
              <li>Baby Shower Planning</li>
              <li>Catering Services</li>
              <li>Event Decoration</li>
              <li>DJ & Entertainment</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-300 mt-8 pt-8 text-center">
          <p className="text-pink-100">
            © 2025 Mahi Events. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
