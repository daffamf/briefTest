import './App.css';
import NavBar from './components/Navbar/navbar';
import Carousel from './pages/Carousel'
import Kategory from './pages/kategory'
import Product from './pages/product'


function App() {
  return (
    <>
      <div className='App'>
        <NavBar />
        <Carousel />
        <Kategory />
        <Product />
      </div>

    </>
  );
}

export default App;
