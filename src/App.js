import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./main/Header";
import Footer from "./main/Footer";
import Home from "./main/Home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
