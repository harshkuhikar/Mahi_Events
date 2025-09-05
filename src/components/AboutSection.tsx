import React from 'react';
import { Heart, Users, Award, Clock } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: Heart,
      title: 'Passionate Planning',
      description: 'Every event is crafted with love and attention to detail'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in event planning and execution'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Always on time, every time, without compromise'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              About <span className="text-[#f05f75]">Mahi Events</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 5 years of experience in creating magical moments, Mahi Events has established itself as one of Ahmedabad's premier event planning companies. We specialize in turning your dreams into reality through meticulous planning and flawless execution.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From intimate celebrations to grand weddings, corporate events to baby showers, we bring creativity, professionalism, and passion to every project. Our team of dedicated experts ensures that every detail is perfect, every moment is memorable.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-[#f05f75] text-white px-6 py-3 rounded-full">
                500+ Events
              </div>
              <div className="bg-[#1abc9c] text-white px-6 py-3 rounded-full">
                300+ Happy Clients
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <Icon className="w-12 h-12 text-[#1abc9c] mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;