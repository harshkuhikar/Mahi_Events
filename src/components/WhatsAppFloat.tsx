import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/919327096060?text=Hello! I would like to inquire about your event planning services.",
      "_blank"
    );
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-[#1abc9c] text-white p-4 rounded-full shadow-lg hover:bg-[#16a085] hover:scale-110 transition-all duration-300 z-40 animate-pulse hover:animate-none"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppFloat;
