import React from 'react';
import "./nav.scss"

const Nav = (props) => {

  return (
    <>
      <header className="App-header">
        <figure>
          <span>TN</span>
        </figure>
        <ul>
          <li>
            <button type="button" onClick={props.about}>About</button>
          </li>

          <li>
            <button type="button" onClick={props.port}>Portfolio</button>
          </li>

          <li>
            <button type="button" onClick={props.think}>Think</button>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Nav;
