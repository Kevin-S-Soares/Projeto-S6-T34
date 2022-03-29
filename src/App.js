import Navbar from "./stateless/Navbar";
import Footer from "./stateless/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Tool from "./pages/Tool";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2 mb-2">
        <Routes>
          <Route path="/" element={<Tool />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
