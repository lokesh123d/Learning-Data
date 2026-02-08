import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ImageCreate from './pages/ImageCreate'
import ShowImage from './pages/ShowImage'
import NotFound from './pages/NotFound'

const App = () => {
      
      
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path='/create' element={<ImageCreate />} />
          <Route path='/allImage' element={<ShowImage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App