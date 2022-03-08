import Container from "./stateful/Container";
import Navbar from "./stateless/Navbar";
import Footer from "./stateless/Footer";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
      <Navbar/>
      <div className="container mt-3 mb-2">
        <Container/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
