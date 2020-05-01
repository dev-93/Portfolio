import React, {useState} from 'react';
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Timeline from "./pages/timeline/Timeline";
import Nav from "./components/Nav";
import Main from "./pages/main/Main";
import './App.scss';

function App() {
  const [isMain, setMain] = useState(true);
  const [isUpload, setUpload] = useState(false);
  const [isAbout, setAbout] = useState(false);
  const [isPortfolio, setPortfolio] = useState(false);
  const [isThink, setThink] = useState(false);
 
  window.onload = function(){ 
    setTimeout(function() {
      setMain(false);
      setUpload(true);
      setAbout(true);
      console.log(100);
    }, 5000);
  }
  
  const about = () => {
    setAbout(true);
    setPortfolio(false);
    setThink(false);
    console.log(200);
  }

  const port = () => {
    setAbout(false);
    setPortfolio(true);
    setThink(false);
    console.log(300);
  }

  const think = () => {
    setAbout(false);
    setPortfolio(false);
    setThink(true);
    console.log(400);
  }

  return (
    <>
      {
        isMain && <Main />
      }
      <div>
        {
          isUpload && (
            <Nav 
              about={about}
              port={port}
              think={think}
            />
          ) 
        }
        {
          isAbout && <About />
        }
        {
          isPortfolio && <Portfolio />
        }
        {
          isThink && <Timeline />
        }
      </div>
    </>
  );
}

export default App;
