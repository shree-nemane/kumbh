import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutIntro from './components/AboutKumbh/AboutIntro'
import RitualsOfKumbh from './components/AboutKumbh/RitualsOfKumbh'
import MajorAttractions from './components/MahaKumbh/MajorAttractions'
import TravelAndStayServices from './components/TravelAndStay/TravelAndStayServices'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/About/Introduction' element={<AboutIntro />}/>
        <Route path='/About/RitualsOfKumbh' element={<RitualsOfKumbh />}/>
        <Route path='/MahaKumbh/MajorAttractions' element={<MajorAttractions />}/>
        <Route path='/MahaKumbh/TravelAndStayServices' element={<TravelAndStayServices />}/>


      </Routes>
    </div>
  )
}

export default App