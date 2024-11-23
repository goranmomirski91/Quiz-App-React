import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            onLogin(username);
        }
    };

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <h2 className="login-form-title">Login</h2>
            <div className="login-form-group">
                <label className="login-form-label" htmlFor="username">
                    Username:
                </label>
                <input
                    className="login-form-input"
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username..."
                    required
                />
            </div>
            <button className="login-form-button" type="submit">
                Start
            </button>
        </form>
    );
};

export default Login;
