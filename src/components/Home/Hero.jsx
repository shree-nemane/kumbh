import React from 'react';
import { Calendar } from 'lucide-react'; // Using lucide-react for the calendar icon
import banner from '../../assets/Home/maha_kumbh_2027_banner.jpg'; // Replace with your actual image path

/**
 * Renders the Maha Kumbh Mela 2025 banner component.
 */
const Hero = () => {

    const honorees = [
        {
            id: 1,
            name: "Shreedarshan Nemane",
            title: "Prime Minister, Wakanda",
            imageUrl: "", // REPLACE with actual image URL
        },
        {
            id: 2,
            name: "Shri Rahul Hadpad",
            title: "Chief Minister, London",
            imageUrl: "https://i.imgur.com/yogi-adityanath.jpg", // REPLACE with actual image URL
        },
    ];

    const ProfileCard = ({ name, title, imageUrl }) => (
        <div className="flex flex-col items-center md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 max-w-sm mx-auto">
            {/* Image Container with the Circular Effect */}
            <div className="relative w-36 h-36 shrink-0">
                {/* Simulated Abstract Circle/Pattern behind the image */}
                <div className="absolute inset-0 rounded-full bg-white/50 backdrop-blur-sm transform scale-110 opacity-70 border border-gray-100 animate-pulse-slow"></div>

                {/* Main Profile Image */}
                <img
                    src={imageUrl}
                    alt={name}
                    className="relative w-full h-full object-cover object-top rounded-full shadow-lg border-4 border-white"
                />
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
                    {name}
                </h3>
                <p className="text-gray-600 text-lg">
                    {title}
                </p>
            </div>
        </div>
    );

    return (
        <>
            <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
                {/* 1. Background Image and Overlay */}
                <div className="absolute inset-0">
                    {/* Replace the 'src' with your actual background image file/URL */}
                    <img
                        src={banner}
                        alt="Spiritual gathering at Maha Kumbh Mela"
                        className="w-full h-full object-cover object-center opacity-60 md:opacity-75"
                    />
                    {/* Gradient Overlay to enhance text readability on the left */}
                    <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent"></div>
                </div>

                {/* 2. Content Container (Text and Date) */}
                <div className="relative z-10 container mx-auto px-4 md:px-8 h-full flex items-center">
                    <div className="max-w-2xl text-white pt-10 pb-10"> {/* Added vertical padding for safety */}

                        {/* Main Headings */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-2">
                            Maha Kumbh
                        </h1>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-orange-500 leading-none tracking-tight mb-6">
                            Mela 2027
                        </h2>

                        {/* Description Text */}
                        <p className="text-lg md:text-xl font-medium mb-4 max-w-md">
                            Welcome to the 2025 Maha Kumbh Mela,
                            <span className="font-extrabold">world's largest congregation of people!</span>
                        </p>
                        <p className="text-base md:text-lg mb-8 max-w-lg">
                            Join us in this grand spiritual gathering to experience the vibrant culture, devotion, and unity.
                        </p>

                        {/* Date Information */}
                        <div className="inline-flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                            <Calendar className="w-5 h-5 text-white" />
                            <span className="text-lg font-semibold tracking-wider">
                                13 January - 26 February
                            </span>
                        </div>

                        {/* You might want a 'Join Now' or 'Learn More' button here for a professional design */}
                        {/* <button className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition duration-300">
            Learn More
          </button> */}

                    </div>
                </div>
            </div>
            <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
                {/* Abstract Background Simulation (Using a large, light element and rotation) */}
                {/* This is a simple Tailwind way to hint at the swirling background pattern */}
                <div className="absolute inset-0 bg-white/70 opacity-30 pointer-events-none">
                    <div className="absolute -top-1/4 -left-1/4 w-1/2 h-full bg-blue-100 rounded-full transform rotate-45"></div>
                    <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-blue-50 rounded-full transform translate-x-1/2 translate-y-1/2"></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-12 md:gap-8 lg:grid-cols-2">
                        {honorees.map(honoree => (
                            <ProfileCard
                                key={honoree.id}
                                name={honoree.name}
                                title={honoree.title}
                                imageUrl={honoree.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>

    );
};

export default Hero;