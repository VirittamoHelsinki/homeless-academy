import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import './index.css'
import About from './pages/About';
import News from './pages/News';
import Article from './pages/Article';
import Events from './pages/Events';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <main className='app__wrapper'>
      <Navbar />
      <ToastContainer hideProgressBar={true} />
      <ContactForm />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<Article />} />
        <Route path='/events' element={<Events />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App




