import React from 'react';
import { CalendarDays, ChevronRight } from 'lucide-react'; // Added ChevronRight for the button

/**
 * Renders the section highlighting the auspicious bathing dates.
 * Optimized for responsiveness, contrast, and clean Tailwind syntax.
 */
const BathingDatesSection = () => {
    // Data for the Shahi Snan (Royal Bathing) dates
    const bathingDates = [
        { ritual: "PAUSH PURNIMA", day: "13", month: "JANUARY", year: "2025" },
        { ritual: "MAKAR SANKRANTI", day: "14", month: "JANUARY", year: "2025" },
        { ritual: "MAUNI AMAVASYA", day: "29", month: "JANUARY", year: "2025" },
        { ritual: "BASANT PANCHAMI", day: "03", month: "FEBRUARY", year: "2025" },
        { ritual: "MAGHI PURNIMA", day: "12", month: "FEBRUARY", year: "2025" },
        { ritual: "MAHA SHIVARATRI", day: "26", month: "FEBRUARY", year: "2025" },
    ];

    // Placeholder image URL for the background
    const imageUrl = "https://i.imgur.com/bathing-bg.jpg"; 

    return (
        <section className="relative py-16 md:py-24 overflow-hidden min-h-[500px]">
            {/* 1. Background Image and Overlay */}
            <div className="absolute inset-0">
                <img
                    src={imageUrl} 
                    alt="Pilgrims performing rituals near the holy river during Kumbh Mela"
                    className="w-full h-full object-cover object-center"
                    aria-hidden="true" 
                />
                
                <div className="absolute inset-0 bg-linear-to-t from-gray-900/80 via-transparent to-gray-900/80"></div>
                <div className="absolute inset-0 bg-teal-800/60"></div>
            </div>

            {/* 2. Main Content Container */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                
                {/* Header */}
                <div className="flex flex-col items-center mb-12">
                    <CalendarDays className="w-10 h-10 text-orange-400 mb-3" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
                        Auspicious Bathing Dates
                    </h2>
                </div>

                {/* Date Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 justify-center max-w-6xl mx-auto mb-10">
                    {bathingDates.map((date, index) => (
                        <div 
                            key={index} 
                            className="p-3 md:p-4 bg-white/95 rounded-xl shadow-2xl border-t-4 border-orange-500 transition duration-300 ease-in-out 
                                       hover:border-orange-600 hover:scale-[1.03] focus:ring-4 focus:ring-orange-300 focus:outline-none"
                            role="listitem"
                            tabIndex="0"
                        >
                            {/* Ritual Name */}
                            <p className="text-xs font-semibold text-gray-700 tracking-wider mb-2 uppercase">
                                {date.ritual}
                            </p>
                            
                            {/* Day - Large and Bold */}
                            <p className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-none">
                                {date.day}
                            </p>
                            
                            {/* Month and Year */}
                            <p className="text-sm md:text-base font-bold text-orange-600 mt-1 uppercase">
                                {date.month}
                            </p>
                            <p className="text-xs text-gray-500">
                                {date.year}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Description Text */}
                <p className="text-base md:text-lg text-white max-w-3xl mx-auto font-medium px-4 mb-8">
                    Bathing ritual is the most significant ritual performed at Kumbh. Although taking a dip 
                    is considered auspicious on any day of the Mela, performing the ritual on these 
                    specific dates is believed to cleanse all past sins and confer great merit.
                </p>
                
                {/* Read More Button (NEW ADDITION) */}
                <button 
                    className="inline-flex items-center px-8 py-3 bg-orange-500 text-white font-semibold 
                               rounded-full shadow-lg hover:bg-orange-600 transition duration-300 
                               focus:outline-none focus:ring-4 focus:ring-orange-300 text-lg tracking-wider"
                    aria-label="Read more details about the auspicious bathing rituals"
                >
                    Read more
                    <ChevronRight className="w-5 h-5 ml-2" />
                </button>
            </div>
        </section>
    );
};

export default BathingDatesSection;