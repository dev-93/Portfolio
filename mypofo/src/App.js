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
  const [comp, setComp] = useState(About);
 
  window.onload = function(){ 
    setTimeout(function() {
      setMain(false);
      setUpload(true);
    }, 5000);
  }
  
  const about = () => {
    setComp(About);
  }

  const port = () => {
    setComp(Portfolio);
  }

  const think = () => {
    setComp(Timeline);
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
          isUpload && <main children={comp} />
        }
      </div>
    </>
  );
}

export default App;
