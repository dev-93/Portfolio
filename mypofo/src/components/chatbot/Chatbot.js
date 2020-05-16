import React, { useState } from 'react';
import "./chatbot.scss"

const Chatbot = () => {
  const [isOpen, setOpen] = useState(false);

  const TextBox = () => {
    return(
      <>
        <div className="detail_box">
          <div className="title">
            <p>문의사항을 말씀해주세요.</p>
            <button type="button" className="close" onClick={()=>{setOpen(false)}}>X</button>
          </div>
          <div className="contents">
            <div className="our">
              <div className="robot">
                <figure>
                  <img src={require("../components/chatbot.PNG")} alt="robot image" /> 
                </figure>
                <p>robot</p>
              </div>
              <div className="text_box">
                <div className="question">어떻게 오게되셨나요?</div>
                <ul className="answer">
                  <li><button>인재채용</button></li>
                  <li><button>심심해서 구경</button></li>
                  <li><button>지인소개</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="wrap_chatbot">
        <div className="container">
          <button type="button" className="plus" onClick={()=>{setOpen(true)}}>+</button>
          {
            isOpen && <TextBox />
          }
        </div>
      </div>
    </>
  );
}

export default Chatbot;