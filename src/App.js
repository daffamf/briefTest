import './App.css';
import NavBar from './components/Navbar/navbar';
import Carousel from './pages/carousel'
import Kategory from './pages/kategory'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Carousel />
        <br />
        <Kategory />


        <div className="pages">

        </div>
      </Router>
    </>
  );
}

export default App;
