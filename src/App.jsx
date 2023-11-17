import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import './index.css'
import About from './pages/About';
import News from './pages/News';
import Article from './pages/Article';
import Events from './pages/Events';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {

  const [language, setLanguage] = useState('FI');

  return (
    <main className='app__wrapper'>
      <Navbar language={language} setLanguage={setLanguage} />
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<Article />} />
        <Route path='/events' element={<Events />} />
      </Routes>
      <Footer></Footer>
    </main>
  )
}

export default App
