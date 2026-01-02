import './App.css'  
import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'
import { Contact } from './pages/Contact.jsx';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { NotFound } from './pages/NotFound.jsx';

function App() {

  return (
    <>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
