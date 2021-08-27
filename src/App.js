import "./App.css";
import Hero from "./components/hero/Hero";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Hero />
    </div>
  );
}

export default App;
