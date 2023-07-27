import './App.css';

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';
import Hotel from './components/Hotel';
import Navbar from './components/Navbar';


function App() {

  useEffect(() => {
    fetch("http://localhost:7000/hotels")
      .then((res) => res.json())
      .then((data) => console.table(data));
  }, []);

  return (

    <Router>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Footer></Footer>
      </div>
      <Routes>

        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/footer" element={<Footer />}></Route>

        <Route path="/hotels/:hotelId" element={<Hotel />}></Route>
        <Route path="/*" element={<PageNotFound />}></Route>



      </Routes>
      
    </Router>


  );
}

export default App;
