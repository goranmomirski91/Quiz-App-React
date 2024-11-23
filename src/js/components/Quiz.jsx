import React, { useState } from 'react';
import Question from './Question';
import Timer from './Timer';

const Quiz = ({ questions, username, onExit }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);
    const [isTimerActive, setIsTimerActive] = useState(true);
    const [resetTimerKey, setResetTimerKey] = useState(0);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        setShowCorrectAnswer(true);
        setIsTimerActive(false);
        if (answer === currentQuestion.correctAnswer) {
            setCorrectAnswersCount((prevCount) => prevCount + 1);
            setScore((prevScore) => prevScore + 10);
            setFeedback('Answer is correct! You earned 10 pts!');
        } else {
            setFeedback(`Answer is incorrect! You lost 5 pts! Correct answer is ${currentQuestion.correctAnswer}`);
            setScore((prevScore) => prevScore - 5);
        }
    };

    const handleNextQuestion = () => {
        setSelectedAnswer(null);
        setShowCorrectAnswer(false);
        setIsTimerActive(true);
        setResetTimerKey((prevKey) => prevKey + 1);
        setFeedback('');

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const handleTimerTimeout = () => {
        setShowCorrectAnswer(true);
        setIsTimerActive(false);
        setScore((prevScore) => prevScore - 5);
    };

    const handleExit = () => {
        onExit();
    };

    return (
        <div className="quiz">
            <header>
                <h2 className="score">
                    {username}'s score : {score} pts
                </h2>
            </header>
            {quizFinished ? (
                <div className="quiz-finish">
                    <h2>Quiz Finished!</h2>
                    <p>
                        Score: {correctAnswersCount} / {questions.length} correct answers
                    </p>

                    <div className="btn-finish">
                        <button
                            onClick={() => {
                                setCurrentQuestionIndex(0);
                                setScore(0);
                                setQuizFinished(false);
                            }}
                        >
                            Restart Quiz
                        </button>
                        <button type="submit" onClick={handleExit}>
                            Exit
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <Timer className="quiz-timer" key={resetTimerKey} active={isTimerActive} onTimeout={handleTimerTimeout} />
                    <Question
                        question={currentQuestion}
                        selectedAnswer={selectedAnswer}
                        showCorrectAnswer={showCorrectAnswer}
                        onAnswerClick={handleAnswerClick}
                    />
                    {feedback && <p>{feedback}</p>}

                    {showCorrectAnswer && (
                        <button className="quiz-next-button" onClick={handleNextQuestion}>
                            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                        </button>
                    )}
                    <button type="submit" onClick={handleExit}>
                        Exit
                    </button>
                </>
            )}
        </div>
    );
};

export default Quiz;
