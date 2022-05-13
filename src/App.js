import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './pages/Home';
import Beliebteste from './pages/Beliebteste';
import ComingSoon from './pages/ComingSoon';
import Kategorien from './pages/Kategorien';
import MeineListe from './pages/MeineListe';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <div className='routes'>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/beliebteste' element={<Beliebteste />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
          <Route path='/kategorien' element={<Kategorien />} />
          <Route path='/meineliste' element={<MeineListe />} />
      </Routes>
      </div>
      
    </div>
  );
}

export default App;