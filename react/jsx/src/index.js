import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {

    const buttonText = 'Click Me!';

    return (
    <div>
    <div className='roi'> Hello World! CARALHO</div>
    <button>{buttonText}</button> {/* Também vale para Funções*/}
    </div>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);