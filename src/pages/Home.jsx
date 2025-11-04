import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Home/Hero'
import PilgrimagePlanner from '../components/Home/PilgrimagePlanner'
import BathingDatesSection from '../components/Home/BathingDates'
import KumbhEventsPackages from '../components/Home/KumbhEventsPackages'
import GalleryPublications from '../components/Home/GalleryPublications'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <PilgrimagePlanner />
      <BathingDatesSection />
      <KumbhEventsPackages />
      <GalleryPublications />
      <Footer />
    </div>

  )
}

export default Home