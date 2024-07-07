import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/notfound'
import Contact from './pages/contact'
import About from './pages/about'
import Services from './pages/services'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
             {/*Add more routes here */}
            <Route path="about" element={<About />} />     
            <Route path="contact" element={<Contact />} /> 
            <Route path="services" element={<Services />} />    
            <Route path="*" element={<NotFound />} />     
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App