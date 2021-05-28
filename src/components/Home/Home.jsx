import react from "react";
import "./Home.css";
import Header from "../Header/Header";
import About from "../About/About";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";
function Home() {
  return (
    <div className="conatiner" id="home">
      <div className="home-container">
        <Header />
        <div className="blur-container"></div>
        <div className="about_me">
          <p>Hello, My name is</p>
          <h2>Amarjeet Prasad</h2>
          <h3>
            and I'm a<h4 data-text="WebDeveloper...">WebDeveloper..</h4>
          </h3>
          <a href="">Hire me</a>
        </div>
      </div>
      <About />
      <Services />
      <Skills />
      <Team />
      <Contact />
    </div>
  );
}
export default Home;
