// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Nav from './components/Nav';
// import Products from './pages/Products';
// import About from './pages/About';
// import OurScience from './pages/OurScience';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div id='app-cont'>
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          {/* <Route
            path='/products'
            element={<Products />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/our-science'
            element={<OurScience />}
          /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
