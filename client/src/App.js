import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div id='app-cont'>
      <Nav />
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
