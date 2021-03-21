import React, {useState, useEffect} from 'react';
import './input-validator.css';

// component that validates form input reactively

export const InputValidatorComponent = ({value}) => {
    let [tradeValidationInput, setTradeValidationInput] = useState('');

    useEffect(() => {
        setTradeValidationInput(value);
    }, [tradeValidationInput, setTradeValidationInput, value])
    console.log('input validation ', tradeValidationInput, value);
    return (
        <div className="validator">
            {(tradeValidationInput === '') ? (
                <p><small>Errors Field Can't Be Empty</small></p>
            ) : (
                <p><small></small></p>
            )} 
        </div> 
    )
}