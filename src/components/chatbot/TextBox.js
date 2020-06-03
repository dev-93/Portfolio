import React, { useState } from "react";
import chatList from "./chatList";
import Answerbox from "./AnswerBox";
import "./textbox.scss";

const Textbox = (props) => {
    const [answer, setAnswer] = useState(false);
    return (
        <>
            <div className="text_box next">
                <div className="question">{chatList[props.num].question}</div>
                <ul className="answer">
                    {chatList[props.num].answers.map((arr, index) => {
                        return (
                            <li key={index}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setAnswer(index + 4);
                                        props.setTextBt(false);
                                    }}
                                >
                                    {arr}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            {(answer === 4 && (
                <Answerbox
                    setAnswer={props.setAnswer}
                    setRecruit={props.setRecruit}
                    setTextBt={props.setTextBt}
                    textBt={props.textBt}
                    num={4}
                />
            )) ||
                (answer === 5 && (
                    <Answerbox
                        setAnswer={props.setAnswer}
                        setRecruit={props.setRecruit}
                        setTextBt={props.setTextBt}
                        textBt={props.textBt}
                        num={5}
                    />
                )) ||
                (answer === 6 && (
                    <Answerbox
                        setAnswer={props.setAnswer}
                        setRecruit={props.setRecruit}
                        setTextBt={props.setTextBt}
                        textBt={props.textBt}
                        num={6}
                    />
                ))}
            {props.textBt && (
                <div className="bt_box">
                    <button
                        type="button"
                        className="prev"
                        onClick={() => {
                            props.setRecruit(false);
                        }}
                    >
                        뒤로 돌아가기
                    </button>
                </div>
            )}
        </>
    );
};

export default Textbox;
