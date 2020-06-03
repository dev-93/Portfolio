import React from "react";
import chatList from "./chatList";
import "./answerbox.scss";

const Answerbox = (props) => {
    return (
        <>
            <div className="answer_box">
                <ul>
                    {chatList[props.num].answers.map((answer, index) => {
                        return (
                            <li key={index}>
                                <div>{answer}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="answer_bt">
                <button
                    type="button"
                    className="gohome"
                    onClick={() => {
                        props.setRecruit(false);
                        props.setAnswer(false);
                    }}
                >
                    처음으로
                </button>

                <button
                    type="button"
                    className="prev"
                    onClick={() => {
                        props.setAnswer(false);
                        props.setTextBt(true);
                    }}
                >
                    뒤로 돌아가기
                </button>
            </div>
        </>
    );
};

export default Answerbox;
