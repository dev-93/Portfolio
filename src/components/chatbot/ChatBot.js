import React, { useState } from 'react';
import "./chatbot.scss"
import DetailBox from "./DetailBox";

const Chatbot = (props) => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      <div className="wrap_chatbot">
        <div className="container">
          <button type="button" className="plus" onClick={()=>{setOpen(true)}}>+</button>
          {
            isOpen && 
              <DetailBox 
                setOpen={setOpen}
              />
          }
        </div>
      </div>
    </>
  );
}

export default Chatbot;