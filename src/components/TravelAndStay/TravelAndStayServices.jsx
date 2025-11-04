import React, { useState } from "react";
import {
  BusFront,
  Car,
  Hotel,
  Utensils,
  MapPin,
  BookOpen,
  Ship,
  ShoppingBag,
} from "lucide-react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import bannerBg from "../../assets/TravelAndStay/Travel&StayBanner.png";

const TravelAndStayServices = () => {
  const [activeCategory, setActiveCategory] = useState("All services");

  // 1. Services Data
  const servicesData = [
    {
      title: "How to Reach",
      description:
        "Find detailed information on how to travel to Prayagraj using trains, flights, and buses.",
      icon: BusFront,
      category: "Travel and Rest",
      color: "text-red-500",
    },
    {
      title: "Where to Stay",
      description:
        "Explore accommodation options including hotels and tent cities for every budget.",
      icon: Hotel,
      category: "Travel and Rest",
      color: "text-orange-500",
    },
    {
      title: "Get Direction to Ghats",
      description:
        "Discover the different Ghats in Prayagraj and find their locations on Google Maps.",
      icon: MapPin,
      category: "All things Kumbh",
      color: "text-orange-600",
    },
    {
      title: "Tourist Guide",
      description:
        "Uncover the heritage and spirituality of Prayagraj with detailed tourist information.",
      icon: BookOpen,
      category: "All things Kumbh",
      color: "text-red-400",
    },
    {
      title: "Visitor's Guide",
      description:
        "Learn how to reach Prayagraj and navigate the city during Kumbh Mela.",
      icon: BookOpen,
      category: "All things Kumbh",
      color: "text-orange-400",
    },
    {
      title: "Parking",
      description:
        "Find secure and convenient parking areas around the Kumbh Mela premises.",
      icon: Car,
      category: "Travel and Rest",
      color: "text-blue-500",
    },
    {
      title: "Sangam Boat Ride",
      description:
        "Experience the divine confluence of rivers through our peaceful boat rides.",
      icon: Ship,
      category: "All things Kumbh",
      color: "text-cyan-500",
    },
    {
      title: "Mela Attractions",
      description:
        "Discover key attractions and must-visit areas within the Kumbh Mela grounds.",
      icon: ShoppingBag,
      category: "All things Kumbh",
      color: "text-orange-700",
    },
    {
      title: "Nearby Attractions",
      description:
        "Explore destinations near Prayagraj that add more meaning to your spiritual journey.",
      icon: MapPin,
      category: "All things Kumbh",
      color: "text-red-600",
    },
    {
      title: "Food and Things to do",
      description:
        "Indulge in local cuisine and experience unique activities across Prayagraj.",
      icon: Utensils,
      category: "Food and Attractions",
      color: "text-red-700",
    },
  ];

  // 2. Categories
  const categories = [
    "All services",
    "Travel and Rest",
    "Food and Attractions",
    "All things Kumbh",
  ];

  // 3. Filter Services
  const filteredServices = servicesData.filter(
    (service) =>
      activeCategory === "All services" || service.category === activeCategory
  );

  // --- Category Tab ---
  const CategoryTab = ({ name }) => (
    <button
      onClick={() => setActiveCategory(name)}
      className={`px-4 py-2 text-sm md:text-base rounded-full border transition duration-300 whitespace-nowrap font-medium 
        ${
          activeCategory === name
            ? "bg-red-500 text-white border-red-500 shadow-md"
            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
        }`}
    >
      {name}
    </button>
  );

  // --- Service Card ---
  const ServiceCard = ({ title, description, Icon, color }) => (
    <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-red-400 transition-all duration-300 flex flex-col items-start">
      <Icon className={`w-10 h-10 mb-4 ${color}`} />
      <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <>
      <Header />

      {/* Section Wrapper */}
      <section className="relative bg-gray-50 pb-16 md:pb-24 overflow-hidden">
        {/* 1. Header Banner */}
        <div className="relative w-full h-48 md:h-64 lg:h-72">
          <img
            src={bannerBg}
            alt="Travel and Stay banner background"
            className="w-full h-full object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Overlay Content */}
          <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-6">
            <div className="text-white text-sm space-x-4 bg-white/40 py-2 px-4 rounded-md backdrop-blur-sm w-fit mb-3">
              <a href="#" className="hover:text-orange-400 font-medium">
                Home
              </a>
              <span className="font-bold text-orange-400">Travel & Stay</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Travel & Stay
            </h1>
          </div>
        </div>

        {/* 2. Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
              Welcome to Nashik!
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Discover a range of travel and accommodation services designed to
              make your Kumbh Mela experience in Prayagraj truly seamless and
              comfortable. Choose what best fits your journey and explore the
              spirit of Kumbh effortlessly.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-center text-sm font-semibold text-gray-500 mb-3">
              Browse by Category:
            </p>
            <div className="flex overflow-x-auto justify-center gap-3 pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <CategoryTab key={cat} name={cat} />
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={service.icon}
                color={service.color}
              />
            ))}

            {filteredServices.length === 0 && (
              <p className="text-center text-gray-500 md:col-span-3">
                No services found in this category.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TravelAndStayServices;
