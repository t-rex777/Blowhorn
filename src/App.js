import "./App.css";
import Brand from "./components/brand/Brand";
import Content from "./components/content/Content";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Team from "./components/team/Team";

function App() {
  return (
    <div>
      <Navbar />
      <MobileNavbar />
      <Hero />
      <Brand />
      <Content />
      <Feature />
      <Team />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
