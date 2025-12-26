import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pages404 from './pages/Page404';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Header />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Pages404 />} />
      </Routes>
      
      <Footer />
    </>

  )
}

export default App
