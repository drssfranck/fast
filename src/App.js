import {  Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "./main/Header";
import Footer from "./main/Footer";
import Home from "./main/Home";
import About from "./composants/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import Whatsapp from "./composants/Whatsapp";
import Contact from "./composants/Contact";
import Immigration from "./composants/Immigration";
import Nosvisa from "./composants/Nosvisa";
import Open from './composants/openfolder/Open'
import Avion from "./composants/flyticket/Avion";
import './app.css'
function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/fast" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/immigration" element={<Immigration/>}/>
          <Route path="/flyticket" element={<Avion/>}/>
          <Route path="/nosvisa" element={<Nosvisa/>}/>
          <Route path="/openFolder" element={<Open/>}/>
        </Routes>
        <Whatsapp/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
