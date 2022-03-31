import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';


function App() {


  return (
  <Router>
    
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/empresa" element={<Empresa/>}></Route>
      <Route path="/contato" element={<Contato/>}></Route>
    </Routes>
    
    <Footer/>
  </Router>
  
  );
}

export default App;
