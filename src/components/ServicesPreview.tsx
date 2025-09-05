import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Building, Baby, Music, Utensils, Camera, ArrowRight } from 'lucide-react';

const ServicesPreview: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding solutions from intimate ceremonies to grand celebrations',
      color: 'bg-[#f05f75]'
    },
    {
      icon: Building,
      title: 'Corporate Events',
      description: 'Professional events that elevate your business and engage your audience',
      color: 'bg-[#1abc9c]'
    },
    {
      icon: Baby,
      title: 'Baby Shower',
      description: 'Adorable celebrations for the newest addition to your family',
      color: 'bg-[#f05f75]'
    },
    {
      icon: Utensils,
      title: 'Catering Services',
      description: 'Delicious cuisine that delights guests and complements your event',
      color: 'bg-[#1abc9c]'
    },
    {
      icon: Music,
      title: 'DJ & Entertainment',
      description: 'Professional entertainment that keeps your guests dancing all night',
      color: 'bg-[#f05f75]'
    },
    {
      icon: Camera,
      title: 'Event Decoration',
      description: 'Stunning decor that transforms spaces into magical experiences',
      color: 'bg-[#1abc9c]'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Our <span className="text-[#f05f75]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to execution, we provide comprehensive event planning services tailored to your unique vision and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-[#f05f75] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center animate-on-scroll">
          <Link
            to="/services"
            className="inline-flex items-center bg-[#f05f75] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e04a64] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;