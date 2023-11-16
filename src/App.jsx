import { Routes, Route } from 'react-router-dom';
import React, { useContext } from 'react';
import AppContext from './AppContext';
import Home from './pages/Home';
import './index.css'
import About from './pages/About';
import News from './pages/News';
import Article from './pages/Article';
import Events from './pages/Events';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <main className='app__wrapper'>
      <Navbar />
      <ContactForm />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<Article />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </main>
  )
}

export default App
