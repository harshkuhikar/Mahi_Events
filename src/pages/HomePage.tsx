import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Users, Calendar, Award, ArrowRight } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesPreview from '../components/ServicesPreview';
import TestimonialsSection from '../components/TestimonialsSection';

const HomePage: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#f05f75] to-[#e04a64]" ref={statsRef}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-on-scroll">
              <Heart className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-pink-100">Events Planned</div>
            </div>
            <div className="animate-on-scroll">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">300+</div>
              <div className="text-pink-100">Happy Clients</div>
            </div>
            <div className="animate-on-scroll">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-pink-100">Years Experience</div>
            </div>
            <div className="animate-on-scroll">
              <Award className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-pink-100">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      <ServicesPreview />
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Ready to Plan Your <span className="text-[#f05f75]">Perfect Event</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create unforgettable memories together. Contact us today for a consultation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-[#f05f75] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e04a64] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Plan Your Event
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;