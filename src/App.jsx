import React, { useState } from 'react';
import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Article from './pages/Article';
import Events from './pages/Events';
import Navbar from './components/Navbar/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {

  const {pathname} = useLocation();
  const [activePage, setActivePage]=useState(pathname);

  return (
    <main className='pt-16'>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <ToastContainer hideProgressBar={true} />
      <ContactForm />
      <ScrollToTopButton />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:articleId' element={<Article />} />
        <Route path='/events' element={<Events />} />
      </Routes>
      <Footer activePage={activePage} setActivePage={setActivePage} />
    </main>
  )
}

export default App




