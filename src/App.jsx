import React, { useState } from 'react';
import Quiz from './js/components/Quiz';
import questions from './data/questions.json';
import Login from './js/components/Login';
import './scss/main.scss';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (name) => {
        setUsername(name);
        setIsLoggedIn(true);
    };

    const handleExit = () => {
        setUsername('');
        setIsLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <>
                    <Quiz username={username} questions={questions} onExit={handleExit} />
                </>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
};
export default App;
