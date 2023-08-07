import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SharedFolder from './pages/SharedFolder';
import FindUs from './pages/FindUs';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/SharedFolder' element={<SharedFolder />}></Route>
        <Route path='/FindUs' element={<FindUs />}></Route>
        <Route path='/About' element={<About />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
