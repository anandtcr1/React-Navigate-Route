import logo from './logo.svg';
import './App.css';

import Navbar from './shared/Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import About from './pages/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
