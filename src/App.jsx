import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Article from './pages/Article';
import Events from './pages/Events';
import Navbar from './components/Navbar';

function App() {

  const [language, setLanguage] = useState('FI');

  return (
    <main className='app__wrapper'>
      <Navbar language={language} setLanguage={setLanguage}/> 
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/news/:id' element={<Article />}/>
        <Route path='/events' element={<Events />}/>
      </Routes>
    </main>
  )
}

export default App
