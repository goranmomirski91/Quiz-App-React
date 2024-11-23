import React from 'react';
import Options from './Options';

const Question = ({ question, selectedAnswer, showCorrectAnswer, onAnswerClick }) => {
    return (
        <div className="question">
            <h2 className="question-text">{question.question}</h2>
            <Options
                options={question.options}
                correctAnswer={question.correctAnswer}
                selectedAnswer={selectedAnswer}
                showCorrectAnswer={showCorrectAnswer}
                onAnswerClick={onAnswerClick}
            />
            {showCorrectAnswer && !selectedAnswer && <p>Time ran out! You lost 5 pts! The correct answer is {question.correctAnswer}.</p>}
        </div>
    );
};

export default Question;
