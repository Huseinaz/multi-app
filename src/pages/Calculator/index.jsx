import React, { useState } from 'react'
import './style.css'


const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');

    const handleInput = (input) => {
        if (displayValue === '0') {
            setDisplayValue(input);
        } else {
            setDisplayValue(displayValue + input);
        }
    }

    const calculate = () => {
        const result = eval(displayValue);
        setDisplayValue(result);
    }

    return (
        <div className='calculator'>
            <input type='text' value={displayValue} readOnly />
            <div className='buttons'>
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('0')}>0</button>
            </div>
            <div className='operator'>
                <button onClick={() => handleInput('+')}>+</button>
                <button onClick={() => handleInput('-')}>-</button>
                <button onClick={() => handleInput('*')}>x</button>
                <button onClick={() => handleInput('/')}>/</button>
            </div>
            <div className='equal'>
                <button onClick={calculate}>=</button>
            </div>
            <div className='clear'>
                <button onClick={() => setDisplayValue('0')}>C</button>
            </div>
        </div>
    )
}

export default Calculator