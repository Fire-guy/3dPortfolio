import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">  
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </Router>
  </main>
  )
}

export default App