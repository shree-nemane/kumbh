import React, { useState } from 'react';
import { MapPin, Calendar, Heart, Package, ChevronRight } from 'lucide-react';
import bg from '../../assets/Home/KumbhEventsPackages_bg.jpg';

const KumbhEventsPackages = () => {
  const [activeTab, setActiveTab] = useState('Kumbh Events');

  const tabs = ['Kumbh Events', 'Things to do', 'Tour Packages'];

  const content = {
    'Kumbh Events': {
      icon: Calendar,
      title: 'Major Spiritual Gatherings and Rituals',
      details: [
        'Shahi Snan (Royal Bathing): The most revered bathing days, featuring processions of sadhus and saints.',
        "Akharas' Peshwai: Grand ceremonial processions marking the arrival of different ascetic orders (Akharas).",
        'Dharma Sansad: A large assembly of religious leaders and saints discussing matters of faith and spirituality.',
        'Bhandaras: Large communal feasts organized by various religious groups for pilgrims and the poor.',
      ],
    },
    'Things to do': {
      icon: Heart,
      title: 'Experiences to Enhance Your Pilgrimage',
      details: [
        'Visit the Temporary City (Mela Kshetra): Explore the massive, organized tent city and its unique infrastructure.',
        'Witness the Aarti Ceremony: Attend the evening prayers along the banks of the Triveni Sangam (confluence).',
        'Attend Satsangs: Participate in spiritual discourses and musical sessions (Bhajans and Kirtans).',
        'Explore Nearby Holy Sites: Take day trips to sacred places like the Bade Hanuman Temple and the Akshayavat tree.',
      ],
    },
    'Tour Packages': {
      icon: Package,
      title: 'Curated Travel and Accommodation Deals',
      details: [
        'Luxury Tent Packages: Includes furnished, air-conditioned tents with dedicated bath facilities and premium meals.',
        'Standard & Budget Packages: Offers durable, clean tented accommodation with communal dining and shared utilities.',
        'Guided Day Tours: Packages focusing solely on the Shahi Snans and key religious sites with an experienced guide.',
        'Extended Spiritual Retreats: Multi-day tours combining Mela participation with visits to Varanasi and Ayodhya Dham.',
      ],
    },
  };

  const activeContent = content[activeTab];

  const TabItem = ({ name }) => (
    <button
      key={name}
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

  return (
    <section className="relative py-14 sm:py-20 md:py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500 mb-3" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 tracking-wide">
            Kumbh Events and Packages
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-10 border-b border-gray-200 max-w-xl mx-auto">
          {tabs.map((tab) => (
            <TabItem key={tab} name={tab} />
          ))}
        </div>

        {/* Image + Content */}
        <div className="relative max-w-7xl mx-auto h-[360px] sm:h-[420px] md:h-[500px] rounded-xl overflow-hidden shadow-xl flex items-center justify-center">
          {/* Background */}
          <img
            src={bg}
            alt="Kumbh Mela event area"
            className="absolute inset-0 w-full h-full object-cover object-center"
            aria-hidden="true"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 text-white w-full flex flex-col items-center text-center md:text-left md:items-start">
            <div className="max-w-2xl space-y-4 sm:space-y-5">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                <activeContent.icon className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  {activeContent.title}
                </h3>
              </div>

              <ul className="space-y-2 text-sm sm:text-base">
                {activeContent.details.slice(0, 2).map((detail, index) => (
                  <li key={index} className="leading-relaxed">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: `<strong>${detail.split(':')[0]}</strong>: ${
                          detail.split(':')[1]
                        }`,
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Read More Button */}
            <button
              className="mt-6 inline-flex items-center px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300 text-sm sm:text-lg"
              aria-label={`Read more about ${activeTab}`}
            >
              Read More
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KumbhEventsPackages;
