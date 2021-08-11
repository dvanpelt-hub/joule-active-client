import React, { Suspense, lazy } from "react";
import "./App.css";
const Nav = lazy(() => import("../Nav/Nav"));
const Header = lazy(() => import("../Header/Header"));
const Descriptions = lazy(() => import("../Descriptions/Descriptions"));
const About = lazy(() => import("../About/About"));
const ProductLineup = lazy(() => import("../ProductLineup/ProductLineup"));
const Contact = lazy(() => import("../Contact/Contact"));
const Footer = lazy(() => import("../Footer/Footer"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Nav />
        <Header />
        <Descriptions />
        <About />
        <ProductLineup />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
