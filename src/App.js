import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Photographer</h1>
      <Nav />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" index element={<About />} />
        <Route path="/gallery" index element={<Gallery />} />
        <Route path="/blog" index element={<Blog />} />
        <Route path="/contact" index element={<Contact />} />
      </Routes>
      <hr />
    </div>
  );
}

export default App;
