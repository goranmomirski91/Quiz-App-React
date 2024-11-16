import React, { useRef, useState } from 'react';
import countriesList from '../../data/countries.json';

export const Login = ({ setUsername }) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const inputRef = useRef();

    const handleUsername = (e) => {
        e.preventDefault();
        inputRef.current.value && setUsername(inputRef.current.value);
    };
    const handleCountryChange = (e) => {
        setSelectedCountry(e.target.value);
    };
    return (
        <form className="start">
            <input placeholder="Enter your name" className="start-input" ref={inputRef} />
            <button className="start-button" onClick={handleUsername}>
                Start
            </button>

            <select id="country" value={selectedCountry} onChange={handleCountryChange}>
                <option value="">Select country</option>
                {countriesList.map((country) => {
                    return (
                        <option value={country.id} key={country.id}>
                            {country.name}
                        </option>
                    );
                })}
            </select>
           
        </form>
    );
};
