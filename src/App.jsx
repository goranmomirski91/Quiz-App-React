import { useState } from 'react';

import './App.scss';
import { Quiz } from './js/Quiz';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Quiz />
        </>
    );
}

export default App;
