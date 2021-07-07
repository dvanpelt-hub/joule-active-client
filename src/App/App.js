import "./App.css";
import Header from "../Header/Header";
import Descriptions from "../Descriptions/Descriptions";
import About from "../About/About";
import ProductLineup from "../ProductLineup/ProductLineup";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Descriptions />
      <About />
      <ProductLineup />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
