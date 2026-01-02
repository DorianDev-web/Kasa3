import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Logement from './pages/Logement';
import Pages404 from './pages/Page404';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logement//id" element={<Logement />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Pages404 />} />
      </Routes>
      
      <Footer />
    </>

  )
}

export default App
