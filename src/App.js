import "./App.css";
import Brand from "./components/brand/Brand";
import Content from "./components/content/Content";
import Feature from "./components/feature/Feature";
import Hero from "./components/hero/Hero";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Hero />
      <Brand />
      <Content />
      <Feature />
    </div>
  );
}

export default App;
