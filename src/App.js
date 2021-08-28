import { useState } from "react";
import "./App.css";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Brand from "./components/brand/Brand";
import Contact from "./components/contact/Contact";
import Content from "./components/content/Content";
import Feature from "./components/feature/Feature";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import MobileNavbar from "./components/navbar/MobileNavbar";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Team from "./components/team/Team";

function App() {
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <div>
      <Navbar
        setSignin={setSignin}
        setSignup={setSignup}
        setContact={setContact}
      />
      <MobileNavbar
        setSignin={setSignin}
        setSignup={setSignup}
        setContact={setContact}
      />
      <Hero />
      <Brand />
      <Content />
      <Feature />
      <Team />
      <Project />
      <Footer />
      {signin && <Signin setSignin={setSignin} />}
      {signup && <Signup setSignup={setSignup} />}
      {contact && <Contact setContact={setContact} />}
    </div>
  );
}

export default App;
