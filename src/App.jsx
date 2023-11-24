import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import './index.css'
import About from './pages/About';
import News from './pages/News';
import Article from './pages/Article';
import Events from './pages/Events';
import Navbar from './components/Navbar/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <main className='pt-16'>
      <Navbar />
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
      <Footer />
    </main>
  )
}

export default App




