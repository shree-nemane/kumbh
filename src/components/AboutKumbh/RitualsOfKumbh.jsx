import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import bannerBg from '../../assets/AboutKumbh/RitualsOfKumbh/RitualsBanner.jpg';
import aartiImage from '../../assets/AboutKumbh/RitualsOfKumbh/aartiImage.jpg';

const RitualsOfKumbh = () => {
  const [activeRitualTab, setActiveRitualTab] = useState('Aarti');

  const ritualTabs = [
    'Aarti',
    'Snan',
    'Kalpavas',
    'Deep Daan',
    'Triveni Sangam',
    'Prayagraj Panchkoshi Parikrama',
    'Shri Madhava Temples',
  ];

  const ritualContent = {
    Aarti: {
      image: aartiImage,
      alt: 'Aarti ritual being performed',
      text: `Aarti in India, since ancient times, various forms of nature like rivers, mountains, and trees have been deemed Gods. 
             In this course, continually flowing rivers served as a lifeline and are given immense importance. In simpler words, 
             human existence demonstrates their gratitude towards rivers through Aarti on the riverbanks in which people 
             participate to show their devotion towards the rivers. At places, these numbers are in hundreds; in others, they may 
             reach several thousand and on special days the participants for these rituals gather in lakhs. Likewise, in Tirthraj 
             Prayagraj, Aartis are performed on the banks of Ganga, Yamuna and at Sangam with great admiration, deep-rooted 
             honor and devotion.`,
    },
    Snan: {
      image: 'https://i.imgur.com/kumbh-snan-placeholder.jpg',
      alt: 'Pilgrims taking holy dip (Snan)',
      text: `Snan, or the sacred bath, is one of the most significant rituals during the Kumbh Mela. It is believed that 
             taking a dip in the holy waters cleanses one of all sins and grants moksha (liberation). Millions of devotees, 
             including Sadhus, saints, and common pilgrims, participate in these auspicious baths, particularly on specific 
             'Shahi Snan' (royal bath) dates.`,
    },
    Kalpavas: {
      image: 'https://i.imgur.com/kumbh-kalpavas-placeholder.jpg',
      alt: 'Kalpavas ritual with hermits',
      text: `Kalpavas is a month-long period of austerity, discipline, and spiritual living observed by devout pilgrims during 
             the Kumbh Mela. Kalpavasis live a minimalist life, sleeping on the ground, eating simple food, and dedicating 
             their time to prayer, meditation, and spiritual discourses.`,
    },
    'Deep Daan': {
      image: 'https://i.imgur.com/deepdaan-placeholder.jpg',
      alt: 'Deep Daan',
      text: `Deep Daan involves offering lamps to the holy rivers as a mark of respect and devotion. The glowing lamps 
             floating on the river create a breathtaking sight symbolizing light overcoming darkness.`,
    },
    'Triveni Sangam': {
      image: 'https://i.imgur.com/sangam-placeholder.jpg',
      alt: 'Triveni Sangam',
      text: `The confluence of Ganga, Yamuna, and mythical Saraswati — Triveni Sangam — is one of the most sacred 
             spots for pilgrims. It represents the merging of physical and spiritual energies.`,
    },
    'Prayagraj Panchkoshi Parikrama': {
      image: 'https://i.imgur.com/parikrama-placeholder.jpg',
      alt: 'Panchkoshi Parikrama',
      text: `The Panchkoshi Parikrama is a circumambulation pilgrimage around the holy city of Prayagraj. 
             Devotees undertake this spiritual journey visiting numerous sacred sites along the route.`,
    },
    'Shri Madhava Temples': {
      image: 'https://i.imgur.com/madhava-placeholder.jpg',
      alt: 'Madhava Temples',
      text: `The Madhava Temples of Prayagraj are deeply revered. Each temple is associated with specific 
             forms of Lord Vishnu and collectively adds to the city’s spiritual landscape.`,
    },
  };

  const RitualTabButton = ({ name, activeTab, setActiveTab }) => (
    <button
      className={`px-5 py-2 md:px-6 md:py-2.5 rounded-full font-medium text-sm md:text-base transition duration-200 whitespace-nowrap
        ${
          activeTab === name
            ? 'bg-orange-500 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      onClick={() => setActiveRitualTab(name)}
    >
      {name}
    </button>
  );

  const RenderActiveRitualContent = ({ content }) => (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col lg:flex-row gap-8 items-start transition-all duration-300">
      {/* Fixed Image Box */}
      <div className="w-full lg:w-2/5 flex-shrink-0">
        <div className="w-full h-64 sm:h-72 lg:h-[28vw] rounded-lg overflow-hidden shadow-lg">
          <img
            src={content.image}
            alt={content.alt}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-3/5">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {activeRitualTab}
        </h3>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {content.text}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <Header />

      {/* Banner Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative w-full h-60 md:h-80 lg:h-96">
          <img
            src={bannerBg}
            alt="Rituals of Kumbh banner"
            className="w-full h-full object-cover object-bottom opacity-90"
          />
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Banner Text */}
          <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-between pt-6 pb-4 md:pt-10 md:pb-6">
            <div className="self-start text-white text-sm bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm space-x-4">
              <a href="#" className="hover:text-orange-400 font-medium">
                Home
              </a>
              <a href="#" className="hover:text-orange-400 font-medium">
                About Kumbh
              </a>
              <span className="font-bold text-orange-400">
                Rituals of Kumbh
              </span>
            </div>

            <h1 className="self-end text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight text-right">
              Rituals of Kumbh
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        {/* Tabs */}
        <div className="mb-12">
          <div className="flex overflow-x-auto gap-3 md:gap-4 lg:gap-6  justify-start md:justify-center scrollbar-hide">
            {ritualTabs.map((tabName) => (
              <RitualTabButton
                key={tabName}
                name={tabName}
                activeTab={activeRitualTab}
                setActiveTab={setActiveRitualTab}
              />
            ))}
          </div>
        </div>

        <hr className='w-[50vw] my-4 flex justify-center items-center mx-auto bg-black' />

        {/* Ritual Content */}
        {ritualContent[activeRitualTab] && (
          <RenderActiveRitualContent content={ritualContent[activeRitualTab]} />
        )}
      </section>

      <Footer />
    </>
  );
};

export default RitualsOfKumbh;
