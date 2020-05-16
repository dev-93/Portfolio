import React, { useState } from 'react';
import "./chatbot.scss"
import chatList from "./chatList";

const Chatbot = () => {
  const [isOpen, setOpen] = useState(false);

  const TextBox = () => {

    // const ChatBox = () => {
    //   return(
    //     <>
    //       <div className="text_box">
    //         {chatList.map((list) => {
    //           return (
    //             <>
    //               <div className="question">{list.question}</div>
    //               <ul className="answer">
    //                 <li><button>{list.answers}</button></li>
    //               </ul>
    //             </>
    //           );
    //         })}
    //       </div>
    //     </>
    //   );
    // }
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
                  <img src={require("./chatbot.PNG")} alt="robot" /> 
                </figure>
                <p>robot</p>
              </div>
              <div className="text_box">
                {chatList.map((list) => {
                  return (
                    <>
                      <div className="question">{list.question}</div>
                      <ul className="answer">
                        <li><button>{list.answers}</button></li>
                      </ul>
                    </>
                  );
                })}
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