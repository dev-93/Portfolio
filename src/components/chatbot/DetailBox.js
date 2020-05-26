import React, { useState } from 'react';
import chatList from "./chatList";
import TextBox from "./TextBox";
import Answerbox from "./AnswerBox";
import "./detailbox.scss";

const DetailBox = (props) => {
  const [recruit, setRecruit] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [textBt, setTextBt] = useState(true);
  
  return(
    <>
      <div className="detail_box">
        <div className="title">
          <p>궁금하신 사항이 있으신가요?</p>
          <button type="button" className="close" onClick={()=>{props.setOpen(false)}}>X</button>
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
              <div className="question">{chatList[0].question}</div>
              <ul className="answer">
                <li>
                  <button type="button" onClick={()=>{setRecruit(1)}}>{chatList[0].answers.fir}</button>
                </li>
                <li>
                  <button type="button" onClick={()=>{setRecruit(2)}}>{chatList[0].answers.sec}</button>
                </li>
                <li>
                  <button type="button" onClick={()=>{setRecruit(3)}}>{chatList[0].answers.thi}</button>
                </li>
              </ul>
            </div>
            {
              (
                recruit === 1 && 
                  <TextBox 
                    setAnswer={setAnswer}
                    setRecruit={setRecruit}
                    setTextBt={setTextBt}
                    textBt={textBt}
                    num={1}
                  />) || 
              (
                recruit === 2 && 
                  <TextBox 
                    setAnswer={setAnswer}
                    setRecruit={setRecruit}
                    setTextBt={setTextBt}
                    textBt={textBt}
                    num={2}
                  />
              ) || (
                recruit === 3 && 
                  <TextBox 
                    setAnswer={setAnswer}
                    setRecruit={setRecruit}
                    setTextBt={setTextBt}
                    textBt={textBt}
                    num={3}
                  />
              )
            }
            {
              answer && 
                <Answerbox
                  setAnswer={setAnswer} 
                  setRecruit={setRecruit}
                  setTextBt={setTextBt}
                  textBt={textBt}
                />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailBox;