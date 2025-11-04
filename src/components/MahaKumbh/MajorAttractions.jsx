import React, { useState } from 'react';
import { MapPin } from 'lucide-react'; // Icon for 'Locate on Map'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import bannerBg from '../../assets/MahaKumbh/MajorAttractions/AttractionsBanner.png'
import img1 from '../../assets/MahaKumbh/MajorAttractions/img1.jpg'

/**
 * Renders the Major Attractions section with banner, introduction, and tabbed attraction details.
 */
const MajorAttractions = () => {


    // State to manage the active attraction selected from the left menu
    const [activeAttraction, setActiveAttraction] = useState('Shri Late Hue Hanumanji Temple');

    // Data for the left-hand navigation menu and content
    const attractionsData = [
        { 
            name: "Shri Late Hue Hanumanji Temple", 
            detail: `In Daraganj locality, on the bank of the Ganga, is the Sanakatmocan Hanuman Temple. It is said that Saint Samarth Guru Ramdasji had established the idol of Lord Hanuman here. 
                     The idols of other Hindu divinities: Ganesh, Bhairav, Durga, Kali and Navagrah are also enshrined in the premises of the temple. Nearby are Shri Ram Janki temples and Kanthashiv temple.`,
            image: img1,
        },
        { 
            name: "Akshayvat", 
            detail: `The Immortal Banyan Tree (Akshayvat) is mentioned in various Hindu scriptures and Puranas. It is believed that this tree remains even after the complete destruction of the universe. 
                     Visiting Akshayvat is considered a deeply sacred act during the Mela.`,
            image: "https://i.imgur.com/akshayvat-placeholder.jpg",
        },
        { 
            name: "Saraswati Koop", 
            detail: `A well believed to be the source of the mythical River Saraswati. Taking water from this well is considered highly pious.`,
            image: "https://i.imgur.com/saraswatikoop-placeholder.jpg",
        },
        { 
            name: "Mankameshwar Temple", 
            detail: `An ancient Shiva temple located near the Yamuna river, famous for fulfilling the wishes of devotees.`,
            image: "https://i.imgur.com/mankameshwar-placeholder.jpg",
        },
        { 
            name: "Maharshi Bharadwaj Ashram", 
            detail: `The hermitage of the ancient sage Maharshi Bharadwaj, a significant historical and spiritual site.`,
            image: "https://i.imgur.com/bharadwaj-ashram-placeholder.jpg",
        },
        { 
            name: "The Grand Palace", 
            detail: `A historical architectural marvel offering insights into the region's royal past.`,
            image: "https://i.imgur.com/grand-palace-placeholder.jpg",
        },
    ];

    // Find the currently active attraction data
    const activeDetails = attractionsData.find(attr => attr.name === activeAttraction) || attractionsData[0];

    return (
        <>
        <Header />
        <section className="relative bg-gray-50 pb-16 md:pb-24 overflow-hidden">
            {/* 1. Header Banner Area */}
            <div className="relative w-full h-60 md:h-80">
                <img
                    src={bannerBg}
                    alt="Major Attractions banner background"
                    className="w-full h-full object-cover object-bottom opacity-90"
                />
                
                {/* Dark Overlay for Text Contrast */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Navigation and Title */}
                <div className="absolute inset-0 container mx-auto px-4 flex justify-between pt-6 pb-4 md:pt-10 md:pb-6">
                    {/* Navigation Links */}
                    <div className="self-end text-white text-sm space-x-4 bg-white/20 px-4 py-2 rounded-md">
                        <a href="#" className="hover:text-orange-400 font-medium">Home</a>
                        <a href="#" className="hover:text-orange-400 font-medium">Maha Kumbh 2025</a>
                        <span className="font-bold text-orange-500">Major Attractions</span>
                    </div>
                    
                    {/* Section Title */}
                    <h1 className="self-end text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                        Major Attractions
                    </h1>
                </div>
            </div>

            {/* 2. Main Content Area */}
            <div className="container mx-auto px-4 py-16 md:py-24">
                
                {/* Introduction Text Block */}
                <div className="max-w-6xl mx-auto text-gray-700 text-lg leading-relaxed mb-12">
                    <p className="mb-4">
                        Prayagraj, holds a sacred significance as the confluence point of the Ganga, Yamuna, and Saraswati rivers, making it one of the pivotal destinations during the upcoming Maha Kumbh Mela in 2025. 
                        The historic city in the state of Uttar Pradesh is a religious treasure trove for Hindu pilgrims and history enthusiasts alike. It offers a rich tapestry of ancient temples, monuments, and various sacred monuments, 
                        all at the heart of Prayagraj near the renowned Triveni Sangam, where the three holy rivers meet, an absolute must-visit for anyone attending the Maha Kumbh Mela in 2025. 
                        However, Prayagraj has much more to offer, including:
                    </p>
                    
                    {/* Key Highlights */}
                    <ul className="list-disc ml-6 space-y-3">
                        <li>
                            <p className="font-semibold text-gray-800">Temples:</p> Explore the spiritual heritage of Prayagraj by visiting temples like the Hanuman Mandir, Alopi Devi Mandir, and Mankameshwar Temple, each steeped in history and religious significance.
                        </li>
                        <li>
                            <p className="font-semibold text-gray-800">Historical Landmarks:</p> Discover the Ashoka Pillar, an ancient edifice that stands as a testament to India’s historical past and explore its inscriptions and significance.
                        </li>
                        <li>
                            <p className="font-semibold text-gray-800">Colonial Architecture:</p> Prayagraj boasts a wealth of Colonial-era buildings, with University of Allahabad building, Shanti Bhavan being a notable example. These structures provide a glimpse into the city’s colonial history and architectural grandeur.
                        </li>
                        <li>
                            <p className="font-semibold text-gray-800">Cultural Heritage:</p> Beyond the Maha Kumbh Mela, Prayagraj's cultural heritage is on full display. Immerse yourself in the local culture, art, and cuisine as you browse the bustling streets and markets.
                        </li>
                        <li>
                            <p className="font-semibold text-gray-800">Educational Institutions:</p> The city is also home to prestigious educational institutions, including the esteemed Allahabad University, which is considered as the Oxford University of the east and has played a significant role in India’s intellectual history.
                        </li>
                    </ul>
                    <p className="mt-6">
                        Maha Kumbh 2025, a sacred pilgrimage and celebration of faith that draws millions of devotees and travelers from all corners of the globe. As you embark on this extraordinary journey, you'll discover a multitude of attractions that make the Maha Kumbh a truly unique and awe-inspiring event.
                    </p>
                </div>
                
                {/* Attractions Detail Block */}
                <h2 className="text-3xl font-extrabold text-gray-800 mb-8 max-w-6xl mx-auto">
                    Attractions of Maha Kumbh 2025
                </h2>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                    
                    {/* Left Column: Attraction List Menu */}
                    <div className="md:col-span-1 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 h-fit">
                        <ul className="divide-y divide-gray-100">
                            {attractionsData.map((attraction) => (
                                <li key={attraction.name}>
                                    <button
                                        onClick={() => setActiveAttraction(attraction.name)}
                                        className={`w-full text-left p-4 transition duration-150 text-base font-medium
                                                    ${activeAttraction === attraction.name 
                                                        ? 'bg-gray-800 text-white shadow-inner'
                                                        : 'hover:bg-gray-100 text-gray-700'
                                                    }`}
                                    >
                                        {attraction.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Attraction Details */}
                    <div className="md:col-span-3 bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8">
                        <div className="flex flex-col lg:flex-row gap-6">
                            
                            {/* Image and Detail Text */}
                            <div className="lg:w-2/5 flex-shrink-0">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{activeDetails.name}</h3>
                                <img 
                                    src={activeDetails.image} 
                                    alt={activeDetails.name} 
                                    className="w-full h-auto object-cover rounded-lg shadow-md mb-4"
                                />
                            </div>
                            
                            <div className="lg:w-3/5">
                                <p className="text-gray-700 text-base leading-relaxed mb-4">
                                    {activeDetails.detail}
                                </p>

                                {/* Locate on Map Button */}
                                <button
                                    className="inline-flex items-center px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg 
                                               shadow-md hover:bg-orange-600 transition duration-300 text-sm"
                                >
                                    <MapPin className="w-4 h-4 mr-2" />
                                    Locate on Map
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>

    );
};

export default MajorAttractions;