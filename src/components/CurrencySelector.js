import React, { useContext } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (selectedCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency
        });
    }

    const currencyName = {
        '$': 'Dollar',
        '£': 'Pound',
        '€': 'Euro',
        '₹': 'Rupee'
    };

    return (
        <div className="currency-selector">
            <DropdownButton
                id="dropdown-basic-button"
                title={`Currency (${currency} ${currencyName[currency]})`}
                variant="success"
                className="currency-dropdown"
            >
                <Dropdown.Item onClick={() => handleCurrencyChange('$')}>$ Dollar</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCurrencyChange('£')}>£ Pound</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCurrencyChange('€')}>€ Euro</Dropdown.Item>
                <Dropdown.Item onClick={() => handleCurrencyChange('₹')}>₹ Rupee</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default CurrencySelector;
