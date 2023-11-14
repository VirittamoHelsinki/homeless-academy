import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Article from './pages/Article';
import Events from './pages/Events';

function App() {

  return (
<<<<<<< HEAD
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
=======
    <main className='app__wrapper'>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/news/:id' element={<Article />}/>
        <Route path='/events' element={<Events />}/>
      </Routes>
    </main>
>>>>>>> 4cb9513da3fc4d518581da16d73b42c1d3aa8724
  )
}

export default App
