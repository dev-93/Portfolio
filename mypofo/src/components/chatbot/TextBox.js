import React, { useState } from 'react';
import chatList from "./chatList";
import "./textbox.scss"

const Textbox = (props) => {
  
  return (
    <>
      <div className="text_box next">
        <div className="question">{chatList[props.num].question}</div>
        <ul className="answer">
          <li>
            <button type="button" 
              onClick={()=>{
                props.setAnswer(true)
                props.setTextBt(false)
                }}>{chatList[props.num].answers.fir}</button>
          </li>
          <li>
            <button type="button" 
              onClick={()=>{
                props.setAnswer(true)
                props.setTextBt(false)
                }}>{chatList[props.num].answers.sec}</button>
          </li>
          <li>
            <button type="button" 
              onClick={()=>{
                props.setAnswer(true)
                props.setTextBt(false)
                }}>{chatList[props.num].answers.thi}</button>
          </li>
        </ul>
      </div>

      {
        props.textBt && 
        <div className="bt_box">
          <button type="button" className="prev" onClick={()=>{props.setRecruit(false)}}>뒤로 돌아가기</button>    
        </div>
      }
    </>
  );
}

export default Textbox;