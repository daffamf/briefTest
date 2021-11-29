import './App.css';
import NavBar from './components/Navbar/navbar';
import Carousel from './pages/carousel'
import Kategory from './pages/kategory'
import Product from './pages/product'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Carousel />
        <Kategory />
        <Product />
      </Router>
    </>
  );
}

export default App;
