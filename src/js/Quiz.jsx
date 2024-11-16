import React, { useEffect, useState } from 'react';
import '../scss/main.scss';
import logo from '../../assets/bg.jpg';
import questions from '../data/questions.json';
import data from '../data/moneyList.json';
import { Trivia } from './components/Trivia';
import { Timer } from './components/Timer';
import { Login } from './components/Login';

export const Quiz = () => {
    const [username, setUsername] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [questionNumber, setQuestionNumber] = useState(1);
    const [stop, setStop] = useState(false);
    const [earned, setEarned] = useState('$ 0');

    useEffect(() => {
        questionNumber > 1 && setEarned(data.find((m) => m.id === questionNumber - 1).amount);
    }, [data, questionNumber]);

    const handleCountryChange = (country) => {
        setSelectedCountry(country);
    };

    return (
        <div className="app">
            {username ? (
                <>
                    <div className="questions-container">
                        {stop ? (
                            <div className="end-container">
                                <h1 className="end-text">
                                    {username} earned: {earned}{' '}
                                </h1>
                                <img className="bg-image-end" src={logo}></img>
                                <button
                                    className="retry-btn"
                                    onClick={() => {
                                        setUsername(null);
                                        setQuestionNumber(1);
                                    }}
                                >
                                    New game
                                </button>
                            </div>
                        ) : (
                            <>
                                <img className="bg-image" src={logo}></img>
                                <div className="top">
                                    <div className="timer">
                                        <Timer setStop={setStop} questionNumber={questionNumber} />
                                    </div>
                                </div>
                                <div className="bottom">
                                    <Trivia questions={questions} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                                </div>
                            </>
                        )}
                    </div>
                    <div className="money-container">
                        <div className="name-container">Name: {username} </div>
                        <div className="country-container">
                            {selectedCountry &&
                                <p>Country: {selectedCountry}</p>}
                           
                          
                        </div>
                        <hr />
                        <ul className="money-list">
                            {data.map((m) => {
                                return (
                                    <li className={questionNumber === m.id ? 'money-list-item active' : 'money-list-item'}>
                                        <span className="money-list-item-number">{m.id}</span>
                                        <span className="money-list-item-amount">{m.amount}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </>
            ) : (
                <Login setUsername={setUsername} setSelectedCountry={setSelectedCountry} onCountryChange={handleCountryChange} selectedCountry={selectedCountry} />
            )}
        </div>
    );
};
