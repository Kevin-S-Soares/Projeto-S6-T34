import Container from "./stateful/Container";
import Navbar from "./stateless/Navbar";
import Footer from "./stateless/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="container">
        <Container/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
