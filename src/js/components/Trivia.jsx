import React, { useState, useEffect } from 'react';


export const Trivia = ({ questions, setStop, questionNumber, setQuestionNumber }) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState('answer');
   
    

    useEffect(() => {
        setQuestion(questions[questionNumber - 1]);
    }, [questions, questionNumber]);

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    const handleClick = (a) => {
        setSelectedAnswer(a);
     
        setClassName('answer active');
        delay(3000, () => setClassName(a.correct ? 'answer correct' : 'answer wrong'));
        delay(6000, () => {
            if (a.correct) {
                setQuestionNumber((prev) => prev + 1);
                setSelectedAnswer(null);
            } else {
                setStop(true);
            }
        });
    };

    return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => {
                    return (
                        <div className={selectedAnswer === a ? className : 'answer'} onClick={() => handleClick(a)}>
                            {a.option}: {a.text}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
