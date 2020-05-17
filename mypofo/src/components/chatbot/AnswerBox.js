import React from 'react';
import "./answerbox.scss"
  
const Answerbox = (props) => {
  return (
    <>
      <div className="answer_box">
        <ul>
          <li>html</li>
          <li>css</li>
          <li>React</li>
          <li>Javascript</li>
          <li>Jquery</li>
        </ul>
      </div>

      <div className="answer_bt">
        <button type="button" className="gohome" 
          onClick={()=>{
            props.setRecruit(false)
            props.setAnswer(false)
          }}>처음으로</button>

        <button type="button" className="prev" 
          onClick={()=>{
            props.setAnswer(false)
            props.setTextBt(true)
          }}>뒤로 돌아가기</button>    
      </div>
    </>
  );
}


export default Answerbox;