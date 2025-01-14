import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home';
import Upcoming from './pages/Upcoming';
import News from './pages/News';
import Past from './pages/Past';
import Sponsors from './pages/Sponsors';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="news" element={<News />} />
          <Route path="past" element={<Past />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;