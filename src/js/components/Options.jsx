import React from 'react';

const Options = ({ options, correctAnswer, selectedAnswer, showCorrectAnswer, onAnswerClick }) => {
    return (
        <div className="option">
            {options.map((option) => {
                let style = {};
                if (showCorrectAnswer) {
                    if (option === correctAnswer) {
                        style = { backgroundColor: 'green', color: 'white' };
                    } else if (option === selectedAnswer) {
                        style = { backgroundColor: 'red', color: 'white' };
                    }
                }

                return (
                    <button className='option-btn' key={option} style={style} onClick={() => !showCorrectAnswer && onAnswerClick(option)}>
                        {option}
                    </button>
                );
            })}
        </div>
    );
};

export default Options;
