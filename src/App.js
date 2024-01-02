import styled, { ThemeProvider } from "styled-components"
import React, {useState} from "react";
import './App.css';
import { darkTheme, lightTheme } from "./Utils/Themes";
import Navbar from "./components/NavBar/Navbar";
import Hero from "./components/HeroSection/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Footer from "./components/Footer/Footer";


const Body =styled.div`
background-color: ${({theme}) => theme.bg};
width: 100%;
height: 100%;
overflow-x: hidden;
`;

const Wrapper = styled.div`
background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
)
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
        <Navbar/>
          <Body>
            <Hero/>
            <Wrapper>
              <Skills/>
              <Experience/>
            </Wrapper>  
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
            <Wrapper>
              <Education/>
              <Contact />
            </Wrapper>
            <Footer />
            {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
          </Body>
        </Router>
   
      </ThemeProvider>
   
  );
}

export default App;
