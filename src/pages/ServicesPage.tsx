import React, { useEffect } from "react";
import {
  Heart,
  Building,
  Baby,
  Music,
  Utensils,
  Camera,
  Palette,
  Gift,
  Users,
  Calendar,
} from "lucide-react";

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Heart,
      title: "Wedding Planning",
      description:
        "Complete wedding solutions from intimate ceremonies to grand celebrations. We handle everything from venue selection to decor, catering, and coordination.",
      features: [
        "Venue Selection",
        "Decoration & Themes",
        "Catering Coordination",
        "Photography & Videography",
        "Guest Management",
        "Timeline Planning",
      ],
      color: "bg-[#f05f75]",
      image:
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      icon: Building,
      title: "Corporate Events",
      description:
        "Professional events that elevate your business and engage your audience. From conferences to product launches and team building activities.",
      features: [
        "Conference Planning",
        "Product Launches",
        "Team Building",
        "Annual Meetings",
        "Networking Events",
        "Award Ceremonies",
      ],
      color: "bg-[#1abc9c]",
      image:
        "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      icon: Baby,
      title: "Baby Shower Planning",
      description:
        "Adorable celebrations for the newest addition to your family. Creating magical moments for expecting parents with themed decorations and activities.",
      features: [
        "Theme Selection",
        "Decoration Setup",
        "Game Planning",
        "Gift Organization",
        "Photography",
        "Catering Coordination",
      ],
      color: "bg-[#f05f75]",
      image:
        "https://images.pexels.com/photos/1778623/pexels-photo-1778623.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      icon: Utensils,
      title: "Catering Services",
      description:
        "Delicious cuisine that delights guests and complements your event. Multi-cuisine options with professional service staff.",
      features: [
        "Multi-Cuisine Menus",
        "Live Counters",
        "Dietary Accommodations",
        "Professional Staff",
        "Equipment Rental",
        "Custom Menus",
      ],
      color: "bg-[#1abc9c]",
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      icon: Music,
      title: "DJ & Entertainment",
      description:
        "Professional entertainment that keeps your guests dancing all night. Complete sound systems and lighting for any event size.",
      features: [
        "Professional DJ Services",
        "Sound System Setup",
        "Lighting Design",
        "Live Music Coordination",
        "MC Services",
        "Special Effects",
      ],
      color: "bg-[#f05f75]",
      image:
        "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      icon: Palette,
      title: "Event Decoration",
      description:
        "Stunning decor that transforms spaces into magical experiences. Custom themes and designs tailored to your vision.",
      features: [
        "Theme Development",
        "Floral Arrangements",
        "Lighting Design",
        "Backdrop Creation",
        "Table Settings",
        "Venue Transformation",
      ],
      color: "bg-[#1abc9c]",
      image:
        "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      icon: Gift,
      title: "Birthday Parties",
      description:
        "Memorable birthday celebrations for all ages. From kids parties with fun activities to elegant adult celebrations.",
      features: [
        "Age-Appropriate Themes",
        "Entertainment Planning",
        "Cake & Dessert Coordination",
        "Activity Organization",
        "Party Favors",
        "Photography",
      ],
      color: "bg-[#f05f75]",
      image:
        "https://images.pexels.com/photos/1729790/pexels-photo-1729790.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      icon: Users,
      title: "Social Events",
      description:
        "Elegant social gatherings that bring people together. From family reunions to anniversary celebrations and community events.",
      features: [
        "Family Reunions",
        "Anniversary Celebrations",
        "Community Events",
        "Charity Functions",
        "Cultural Programs",
        "Festival Celebrations",
      ],
      color: "bg-[#1abc9c]",
      image:
        "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        className="relative py-20 text-white bg-center bg-cover  h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://media.cnn.com/api/v1/images/stellar/prod/201114094743-01-indian-arranged-marriage-dst-intl-hnk.jpg?q=w_3000,h_1688,x_0,y_0,c_fill')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fadeInUp">
            Our Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Comprehensive event planning services designed to make your special
            occasions unforgettable
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-on-scroll ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="flex items-center mb-6">
                      <div
                        className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mr-4`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-[#1abc9c] rounded-full mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={isEven ? "lg:col-start-2" : ""}>
                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              Ready to Start Planning?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your event requirements and create something
              extraordinary together.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center bg-[#f05f75] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e04a64] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
