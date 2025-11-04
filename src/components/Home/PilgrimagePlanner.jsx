import React from 'react';
import { Plane, Home, Settings, Map, Luggage } from 'lucide-react';
import PilgrimageCollage from '../../assets/Home/PilgrimageCollage.jpg';

const PilgrimagePlanner = () => {
  const categories = [
    {
      icon: Plane,
      title: "How to Reach",
      description:
        "Explore seamless travel options by air, rail, or road, and start your journey effortlessly.",
      color: "text-orange-400",
    },
    {
      icon: Home,
      title: "Where to Stay",
      description:
        "Discover curated stays for a peaceful retreat — comfort meets spirituality.",
      color: "text-red-400",
    },
    {
      icon: Settings,
      title: "Public Utilities",
      description:
        "Easily access categorized information about essential public utilities for your convenience.",
      color: "text-orange-500",
    },
    {
      icon: Map,
      title: "Nearby Attractions",
      description:
        "Uncover nearby attractions like Varanasi, Ayodhya Dham, and other sacred destinations.",
      color: "text-red-500",
    },
  ];

  return (
    <section className="relative py-14 sm:py-20 md:py-18 bg-gray-900 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://i.imgur.com/dark-city-bg.jpg"
          alt="Night view of a holy gathering"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <Luggage className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mx-auto mb-3" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">
            Plan Your Pilgrimage
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join us in this extraordinary journey and witness the confluence of
            tradition, devotion, and enlightenment.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Category Cards */}
          <div className="space-y-4 sm:space-y-5">
            {categories.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="p-3 rounded-lg bg-gray-800 flex-shrink-0">
                  <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color}`} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image Collage */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src={PilgrimageCollage}
              alt="Pilgrimage Collage"
              className="w-full h-[280px] sm:h-[380px] md:h-[460px] lg:h-[500px] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilgrimagePlanner;
