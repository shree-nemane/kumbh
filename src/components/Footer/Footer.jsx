import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import maha_gov_logo from '../../assets/Home/Header/maha_gov_logo.png';

const Footer = () => {
  const links = [
    {
      title: 'Important Links',
      items: [
        'Incredible India',
        'Ministry of Tourism India',
        'Privacy Policy',
        'Terms of Platform Use',
        'Disclaimer',
      ],
    },
    {
      title: 'Visitor Services',
      items: ['FAQ', "Do's & Don'ts", 'About us', 'Accessibility Statement', 'Prayagraj Map'],
    },
    {
      title: 'Visitor Corner',
      items: ['Tenders', 'Downloads', 'Key Announcements'],
    },
  ];

  const helpSupport = [
    { title: 'Lost & Found', link: '#' },
    { title: 'Support & Safety', link: '#' },
    { title: 'Maha Kumbh Helpline Number', detail: '1920' },
    { title: 'Mela Police Helpline Number', detail: '1944' },
    { title: 'Fire Services Number', detail: '1945' },
    { title: 'Food and Supplies', detail: '1010' },
    { title: 'Ambulance Helpline', detail: '102/108' },
  ];

  const qrCodeGoogle = 'https://i.imgur.com/google-qr.png';
  const qrCodeApple = 'https://i.imgur.com/apple-qr.png';

  return (
    <footer className="bg-gray-900 text-white pt-10 pb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Column 1: Logo, QR Codes, Contact Box */}
          <div className="lg:col-span-2 flex flex-col space-y-8">
            {/* Logo + QR Codes */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <img
                src={maha_gov_logo}
                alt="Maha Gov Logo"
                className="w-24 sm:w-28 md:w-32 h-auto invert mx-auto sm:mx-0"
              />
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="#" aria-label="Download on Google Play">
                  <img
                    src={qrCodeGoogle}
                    alt="Google Play QR Code"
                    className="w-20 sm:w-24 h-20 sm:h-24 bg-white p-1 rounded-md"
                  />
                </a>
                <a href="#" aria-label="Download on App Store">
                  <img
                    src={qrCodeApple}
                    alt="App Store QR Code"
                    className="w-20 sm:w-24 h-20 sm:h-24 bg-white p-1 rounded-md"
                  />
                </a>
              </div>
            </div>

            {/* Contact Box */}
            <div className="bg-teal-900 p-5 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Get In Touch</span>
              </h3>
              <div className="space-y-3 text-sm sm:text-base text-gray-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-300 shrink-0 mt-0.5" />
                  <p>
                    Nashik Mela Authority, Parade Ground, Sinnar, Nashik, Maharashtra - 422104
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-teal-300 shrink-0" />
                  <p>0532-*****, 0532-xxxxx</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-teal-300 shrink-0" />
                  <a
                    href="mailto:info.mahakumbh25@gmail.com"
                    className="hover:text-white transition-colors duration-200"
                  >
                    info.mahakumbh25@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2-5: Links and Help */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-10">
            {/* Map through standard link columns */}
            {links.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-orange-500 font-bold mb-3 sm:mb-4 tracking-wider text-sm sm:text-base">
                  {col.title}
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  {col.items.map((item, i) => (
                    <li key={i}>
                      <a href="#" className="hover:text-white transition duration-200">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Help & Support */}
            <div>
              <h4 className="text-orange-500 font-bold mb-3 sm:mb-4 tracking-wider text-sm sm:text-base">
                Help & Support
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {helpSupport.map((item, index) => (
                  <li key={index} className="flex justify-between items-start gap-2">
                    <a href={item.link || '#'} className="hover:text-white transition duration-200">
                      {item.title}
                    </a>
                    {item.detail && (
                      <span className="text-gray-200 font-semibold text-xs sm:text-sm">
                        {item.detail}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-5 text-center text-xs sm:text-sm text-gray-500 leading-relaxed">
          <p>
            © 2025 Nashik Mela Authority. All Rights Reserved. Hosted by Nashik Mela Authority. The
            official website of Maha Kumbh Mela 2027.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
