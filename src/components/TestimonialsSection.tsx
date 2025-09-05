import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Priya & Raj Patel',
      event: 'Wedding',
      rating: 5,
      text: 'Mahi Events made our dream wedding come true! Every detail was perfect, and the coordination was flawless. Our guests are still talking about how beautiful everything was.',
      image: 'https://images.pexels.com/photos/1024990/pexels-photo-1024990.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      event: 'Corporate Event',
      rating: 5,
      text: 'Professional, creative, and reliable. The team at Mahi Events transformed our annual conference into an engaging and memorable experience for all attendees.',
      image: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Meera Shah',
      event: 'Baby Shower',
      rating: 5,
      text: 'The baby shower was absolutely adorable! Every decoration was thoughtfully planned, and the attention to detail was incredible. Thank you for making this day so special.',
      image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            What Our <span className="text-[#f05f75]">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with Mahi Events
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 p-12 rounded-2xl shadow-lg relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-16 h-16 text-[#1abc9c] opacity-20" />
            
            <div className="text-center">
              <img
                src={currentTest.image}
                alt={currentTest.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
              />
              
              <div className="flex justify-center mb-4">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                "{currentTest.text}"
              </p>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  {currentTest.name}
                </h4>
                <p className="text-[#1abc9c] font-medium">
                  {currentTest.event}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full text-gray-600 hover:text-[#f05f75] transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:shadow-xl p-3 rounded-full text-gray-600 hover:text-[#f05f75] transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-[#f05f75] scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;