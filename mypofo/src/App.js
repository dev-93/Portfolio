import React, {useState} from 'react';
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import './App.scss';

function App() {
  const [isUpload, setUpload] = useState(false);

  const show = () => {
    setUpload(true);
  }
  return (
    <>
      <Main />
      <div>
        {
          isUpload && <Nav />
        }
      </div>
    </>
  );
}

export default App;
