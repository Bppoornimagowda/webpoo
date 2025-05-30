import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomeScreen from './components/js/HomeScreen';
import AboutUs from './components/js/AboutUs';
import Leadership from './components/js/Leadership';
import Services from './components/js/Services';
import Values from './components/js/Values';
import Strategy from './components/js/Strategy';
import Careers from './components/js/Careers';
import Blog from './components/js/Blog';
import ScrollToTop from './components/ScrollToTop';
  
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/company/about" element={<AboutUs />} />
          <Route path='/company/leadership' element={<Leadership />} />
          <Route path='/company/services' element={<Services />} />
          <Route path="/company/values" element={<Values />} />
          <Route path="/company/strategy" element={<Strategy />} />
          <Route path="/blog" element={<Blog />} />   
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;