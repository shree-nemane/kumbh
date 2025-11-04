import React, { useState } from 'react';
import { Image, BookOpen, ChevronLeft, ChevronRight, Download } from 'lucide-react';

const GalleryPublications = () => {
  const [activeTab, setActiveTab] = useState('Publications');

  const galleryItems = [
    { src: 'https://i.imgur.com/gallery-1.jpg', alt: 'Leader addressing a crowd' },
    { src: 'https://i.imgur.com/gallery-2.jpg', alt: 'Officials on stage' },
    { src: 'https://i.imgur.com/gallery-3.jpg', alt: 'People near the river' },
    { src: 'https://i.imgur.com/gallery-4.jpg', alt: 'Delegates meeting' },
    { src: 'https://i.imgur.com/gallery-5.jpg', alt: 'Leaders greeting' },
  ];

  const publicationCovers = [
    {
      title: 'Public Management in the Extreme',
      subtitle: 'LSE Case Study Research',
      coverUrl: 'https://i.imgur.com/lse-report.jpg',
    },
    {
      title: 'KUMBH 2019: PAINT MY CITY',
      subtitle: 'Making Prayagraj a Poster City',
      coverUrl: 'https://i.imgur.com/paint-my-city.jpg',
    },
    {
      title: 'Swachh KUMBH',
      subtitle: 'Delivering a Clean Kumbh',
      coverUrl: 'https://i.imgur.com/swachh-kumbh.jpg',
    },
    {
      title: 'PRAYAGRAJ',
      subtitle: 'Smart City, Smart Future',
      coverUrl: 'https://i.imgur.com/prayagraj-smart.jpg',
    },
    {
      title: 'Kumbh Mela Logistics',
      subtitle: 'Managing Crowd Flow',
      coverUrl: 'https://i.imgur.com/kumbh-logistics.jpg',
    },
  ];

  const TabItem = ({ name }) => (
    <button
      className={`px-3 sm:px-4 py-2 text-base sm:text-lg font-medium transition duration-200 ${
        activeTab === name
          ? 'text-gray-900 border-b-2 border-orange-500'
          : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent'
      }`}
      onClick={() => setActiveTab(name)}
    >
      {name}
    </button>
  );

  const PublicationCard = ({ coverUrl, title, subtitle }) => (
    <div className="flex-shrink-0 w-56 sm:w-64 snap-center mx-3 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-300 hover:scale-105">
      <div className="relative h-72 sm:h-80">
        <img src={coverUrl} alt={`${title} cover`} className="w-full h-full object-cover" />
      </div>
      <div className="p-3 sm:p-4 text-center">
        <a
          href="#"
          className="inline-flex items-center justify-center w-full px-5 sm:px-6 py-2 border border-orange-500 text-orange-600 
                     font-semibold rounded-lg hover:bg-orange-50 transition duration-300"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </a>
      </div>
    </div>
  );

  const renderContent = () => {
    if (activeTab === 'Publications') {
      return (
        <div className="relative max-w-7xl mx-auto">
          {/* Scrollable Carousel */}
          <div
            className="flex overflow-x-scroll snap-x snap-mandatory py-4 px-2 -mx-2 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {publicationCovers.map((pub, index) => (
              <PublicationCard
                key={index}
                coverUrl={pub.coverUrl}
                title={pub.title}
                subtitle={pub.subtitle}
              />
            ))}
          </div>

          {/* Navigation Buttons (Desktop Only) */}
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-lg hidden md:block hover:bg-white z-20">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-lg hidden md:block hover:bg-white z-20">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto items-center lg:items-start">
          {/* Text + Small Gallery Grid */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
              Explore the heart of Mela through our mesmerizing{' '}
              <span className="font-semibold">Gallery</span> section. Immerse yourself in a visual
              journey, capturing the spirituality, grandeur, and vibrant moments of this sacred
              gathering. Witness the essence of faith and devotion through captivating images and
              videos. Let the gallery be your window to the soul-stirring experiences of Maha Kumbh
              Mela.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 justify-center lg:justify-start">
              {galleryItems.slice(0, 4).map((item, index) => (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-md shadow-sm hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* Video / Image Placeholder */}
          <div className="lg:w-1/2 w-full">
            <div className="w-full aspect-video bg-gray-200 rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
              <div className="text-gray-600 text-sm sm:text-base">[Video Placeholder]</div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section className="relative py-14 sm:py-20 md:py-24 bg-gradient-to-br from-white via-pink-50/50 to-blue-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-center text-center mb-8 sm:mb-10">
          <Image className="w-8 h-8 sm:w-9 sm:h-9 text-orange-500 mr-3" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-700 tracking-wide">
            Gallery and Publications
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 border-b border-gray-300 max-w-sm mx-auto">
          <TabItem name="Gallery" />
          <TabItem name="Publications" />
        </div>

        {/* Dynamic Content */}
        <div className="relative z-10">{renderContent()}</div>

        {/* View More Button */}
        <div className="text-center mt-10 sm:mt-12">
          <button
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-orange-600 font-semibold 
                       rounded-lg shadow-lg border border-gray-300
                       hover:bg-gray-100 transition duration-300 
                       focus:outline-none focus:ring-4 focus:ring-orange-200 text-base sm:text-lg"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPublications;
