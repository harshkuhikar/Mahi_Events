import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const heroImages = [
  "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
  "https://blog.shaadi.com/wp-content/uploads/2024/07/03_Why-is-Marriage-Important_-12-Powerful-Reasons-Why-You-Should-Get-Married.jpg",
  "https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwbWFycmlhZ2V8ZW58MHx8MHx8fDA%3D",
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Event ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-20"
      >
        <ChevronRight size={24} />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full xsm:mt-12 flex items-center justify-center text-center text-white hero-section">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            Creating Unforgettable
            <br />
            <span className="text-[#f05f75]">Memories</span> with Style
          </h1>
          <p className="text-sm md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-fadeInUp animation-delay-300">
            From intimate gatherings to grand celebrations, we craft
            extraordinary events that tell your unique story
          </p>
          <div className="space-x-4 animate-fadeInUp animation-delay-600">
            <Link
              to="/contact"
              className="inline-flex items-center bg-[#f05f75] text-white 
             px-5 py-2.5 sm:px-8 sm:py-4 
             rounded-full text-base sm:text-lg font-semibold 
             hover:bg-[#e04a64] transform hover:scale-105 
             transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Plan Your Event
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Link>

            <Link
              to="/gallery"
              className="inline-flex items-center bg-transparent border-2 border-white text-white
             px-5 py-2.5 sm:px-8 sm:py-4 
             rounded-full text-base sm:text-lg font-semibold 
             hover:bg-white hover:text-gray-800 
             transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-[#f05f75] scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
