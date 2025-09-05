import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
}

const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ["all", "weddings", "corporate", "babyshower", "birthday"];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "weddings",
      title: "Elegant Wedding Ceremony",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "corporate",
      title: "Corporate Conference",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1778623/pexels-photo-1778623.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "babyshower",
      title: "Baby Shower Celebration",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1729790/pexels-photo-1729790.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "birthday",
      title: "Birthday Party",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1444443/pexels-photo-1444443.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "weddings",
      title: "Wedding Reception",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "corporate",
      title: "Corporate Event",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "weddings",
      title: "Wedding Catering",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "birthday",
      title: "Birthday Celebration",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/1444444/pexels-photo-1444444.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "weddings",
      title: "Wedding Decor",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "babyshower",
      title: "Baby Shower Setup",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "corporate",
      title: "Business Meeting",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      category: "birthday",
      title: "Kids Birthday Party",
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
    setCurrentImageIndex(filteredItems.findIndex((i) => i.id === item.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentImageIndex + 1) % filteredItems.length;

    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

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
  }, [selectedCategory]);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section
        className="relative py-20 text-white bg-center bg-cover h-[50vh] flex justify-center items-center"
        style={{
          backgroundImage: `url('https://media.cnn.com/api/v1/images/stellar/prod/201114094743-01-indian-arranged-marriage-dst-intl-hnk.jpg?q=w_3000,h_1688,x_0,y_0,c_fill')`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fadeInUp">
            Our Gallery
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Explore our portfolio of beautifully crafted events and celebrations
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#f05f75] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category === "all"
                  ? "All Events"
                  : category === "weddings"
                  ? "Weddings"
                  : category === "corporate"
                  ? "Corporate"
                  : category === "babyshower"
                  ? "Baby Shower"
                  : "Birthday"}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-on-scroll group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(item)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm capitalize">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                No images found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-[#f05f75] transition-colors duration-300"
            >
              <X size={32} />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-xl font-semibold">
                {selectedImage.title}
              </h3>
              <p className="text-gray-200 capitalize">
                {selectedImage.category}
              </p>
            </div>

            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
