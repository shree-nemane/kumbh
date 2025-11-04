import React from 'react';
import introbanner from '../../assets/AboutKumbh/AboutIntro/IntroductionBanner.png'
import intro2 from '../../assets/AboutKumbh/AboutIntro/intro2.png'
import intro3 from '../../assets/AboutKumbh/AboutIntro/intro3.png'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const AboutIntro = () => {

    const locations = [
        "In Haridwar, Uttarakhand, on the banks of the Ganges",
        "In Ujjain, Madhya Pradesh, on the banks of the Shipra",
        "In Nashik, Maharashtra, on the banks of the Godavari",
        "In Prayagraj, Uttar Pradesh, at the confluence of the Ganges, the Yamuna, and the mythical invisible Saraswati"
    ];

    return (
        <>
            <Header />
<section className="relative bg-white overflow-hidden">
      {/* Header Banner */}
      <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96">
        <img
          src={introbanner}
          alt="Panoramic view of the Mela ground at sunrise"
          className="w-full h-full object-cover object-bottom opacity-90"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Navigation + Title */}
        <div className="absolute inset-0 container mx-auto px-4 flex flex-col justify-end pb-6 sm:pb-8 md:pb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            {/* Breadcrumb Navigation */}
            <div className="bg-white/30 backdrop-blur-sm py-2 px-4 rounded-md text-white text-sm space-x-3 mb-3 md:mb-0">
              <a href="#" className="hover:text-orange-400 font-medium">
                Home
              </a>
              <a href="#" className="hover:text-orange-400 font-medium">
                About Kumbh
              </a>
              <span className="font-bold text-white">Introduction</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Introduction
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Quote 1 + Content Block 1 */}
        <div className="mb-16">
          <p className="text-2xl sm:text-3xl font-serif text-gray-700 mb-8 italic text-center lg:text-left">
            “Discover Maha Kumbh, Discover India, Discover Yourself”
          </p>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Text */}
            <div className="lg:w-3/5 text-gray-700">
              <p className="text-base sm:text-lg mb-4 leading-relaxed">
                The Maha Kumbh Mela (the festival of the sacred pitcher) is
                anchored in Hindu mythology. It is the world’s largest public
                gathering and collective act of faith. This congregation
                primarily includes ascetics, saints, sadhus, boadhuas,
                kalpavasi, and pilgrims from all walks of life.
              </p>
              <p className="text-base sm:text-lg mb-6 leading-relaxed">
                Kumbh Mela, in Hinduism, is a religious pilgrimage celebrated
                four times over a course of 12 years. The geographical location
                of the Kumbh Mela spans four locations in India, rotating
                between the following sacred sites:
              </p>

              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mb-8">
                {locations.map((loc, index) => (
                  <li key={index} className="text-base sm:text-lg text-gray-600">
                    {loc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image 1 */}
            <div className="lg:w-2/5 flex justify-center lg:justify-end">
              <img
                src={intro2}
                alt="Aerial view of pilgrims bathing in the river"
                className="w-full max-w-md lg:max-w-none h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        <hr className="my-16 border-gray-200" />

        {/* Quote 2 + Content Block 2 */}
        <div className="mb-16">
          <p className="text-2xl sm:text-3xl font-serif text-gray-700 mb-8 italic text-center lg:text-left">
            “Untruth leads us to Truth, Darkness leads us to Light, Death leads
            us to Immortality”
          </p>

          <div className="flex flex-col gap-10">
            {/* Row 1 - Image + Text */}
            <div className="flex flex-col-reverse lg:flex-row gap-10 items-start">
              {/* Image */}
              <div className="w-full lg:w-2/5 flex-shrink-0">
                <img
                  src={intro3}
                  alt="Group of Sadhus marching in a procession"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Text */}
              <div className="w-full lg:w-3/5 text-gray-700">
                <p className="text-base sm:text-lg mb-4 leading-relaxed">
                  Each Mela celebration is based on a distinct set of
                  astrological positions of the sun, moon, and Jupiter. The
                  celebrations occur when these alignments are complete, marking
                  the holiest time in Hinduism. The Kumbh Mela encapsulates
                  astronomy, astrology, spirituality, traditions, and
                  socio-cultural customs — making it deeply rich in knowledge.
                </p>
              </div>
            </div>

            {/* Row 2 - Remaining Text */}
            <div className="w-full text-gray-700">
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Pilgrims to the Kumbh Mela come from all sections of Hinduism —
                from ascetics (Sadhus and Naga Sadhus) who follow strict paths
                of spiritual discipline, to hermits who emerge from seclusion,
                to seekers of spirituality, and to common devotees.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                During the Kumbh Mela, many ceremonies take place — including
                traditional processions of Akharas on elephants, horses, and
                chariots, along with Naga Sadhus performing “shahi snan” and
                various cultural rituals that draw millions of pilgrims.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
            <Footer />
        </>

    );
};

export default AboutIntro;