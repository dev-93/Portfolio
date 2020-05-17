import React, { useState } from 'react';
import "./answerbox.scss"
  
const Answerbox = (props) => {
  const [prev, setPrev] = useState(true);

  return (
    <>
    {
      prev && (
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
            <button type="button" className="gohome">처음으로</button>

            <button type="button" className="prev" onClick={()=>{setPrev(false)}}>뒤로 돌아가기</button>    
          </div>
        </>
      )
    }
    </>
  );
}


export default Answerbox;