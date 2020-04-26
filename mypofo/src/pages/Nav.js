import React, {useState} from 'react';
import Portfolio from "./Portfolio"
import "./nav.scss"

const Nav = () => {
  const [isAbout, setAbout] = useState(false);
  const [isPortfolio, setPortfolio] = useState(false);
  const [isThink, setThink] = useState(false);
 
  const About = () => {
    setAbout(true);
    setPortfolio(false);
    setThink(false);

    return (
      <>
        {
          isAbout && <h1>렌더링 테스트</h1>
        }
      </>
    )
  }

  const Port = () => {
    setAbout(false);
    setPortfolio(true);
    setThink(false);
    
    return (
      <>
        {
          isPortfolio && <Portfolio />
        }
      </>
    )
  }

  const Think = () => {
    setAbout(false);
    setPortfolio(false);
    setThink(true);
    
    return (
      <>
        {
          isThink && <h1>world</h1>        
        }
      </>
    )
  }

  return (
    <header className="App-header">
      <figure>
        TN
      </figure>
      <ul>
        <li>
          <button type="button" onClick={About}>About</button>
        </li>

        <li>
          <button type="button" onClick={Port}>Portfolio</button>
        </li>

        <li>
          <button type="button" onClick={Think}>Think</button>
        </li>
      </ul>
    </header>
  );
}

export default Nav;
