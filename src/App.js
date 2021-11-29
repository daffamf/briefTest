import './App.css';
import NavBar from './components/Navbar/navbar';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <NavBar />

      <div className="pages">
       
      </div>
    </Router>
  </>
  );
}

export default App;
