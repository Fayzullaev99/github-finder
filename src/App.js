import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AlertProvider } from './components/context/alert/AlerContext';
import { GithubProvider } from './components/context/github/GithubContext';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Profile from './components/pages/Profile';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
      <div className='app'>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:login' element={<Profile />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        <Footer />
        
      </div>
    </Router>
    </AlertProvider>
    </GithubProvider>
  );
}

export default App;
