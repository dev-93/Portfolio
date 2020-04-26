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
  }

  const Port = () => {
    setAbout(false);
    setPortfolio(true);
    setThink(false);
  }

  const Think = () => {
    setAbout(false);
    setPortfolio(false);
    setThink(true);
  }

  return (
    <>
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
      {
        isAbout && <h1>렌더링 테스트</h1>
      }
      {
        isPortfolio && <Portfolio />
      }
      {
        isThink && <h1>테스트 중</h1>        
      }
    </>
  );
}

export default Nav;
