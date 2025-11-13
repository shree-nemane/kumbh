import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutIntro from './components/AboutKumbh/AboutIntro'
import RitualsOfKumbh from './components/AboutKumbh/RitualsOfKumbh'
import MajorAttractions from './components/MahaKumbh/MajorAttractions'
import TravelAndStayServices from './components/TravelAndStay/TravelAndStayServices'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/Login/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import { AlertProvider } from './context/AlertContext'
import AlertPopup from './components/Popup/Popup'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'


const App = () => {
  return (
    <div>
      <AlertProvider>
          <AlertPopup />
          <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/About/Introduction' element={<AboutIntro />} />
          <Route path='/About/RitualsOfKumbh' element={<RitualsOfKumbh />} />
          <Route path='/MahaKumbh/MajorAttractions' element={<MajorAttractions />} />
          <Route path='/MahaKumbh/TravelAndStayServices' element={<TravelAndStayServices />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          /> */}

        </Routes>
      </AlertProvider>

    </div>
  )
}

export default App