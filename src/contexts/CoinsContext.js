import React, { createContext, useState, useEffect, Children } from 'react';
import { chartCurrenciesGet,  currencySearch } from '../constants';

export const CoinsContext = createContext();

const CoinsContextProvider = ({ children }) => {
    const [doneFetch, setDoneFetch] = useState();
    const [currentQCurrency, setCurrentQCurrency] = useState('');
    const [text, setText] = useState('Top Currencies');
    const [currencies, setCurrencies] = useState([]);

    useEffect(() => getTopCurrencies(), []);

    const getTopCurrencies = q_convert => {
        
        fetch(chartCurrenciesGet('USD'))
        .then(res => res.json())
        .then(jdata => {
            setDoneFetch(true);
            setCurrencies(jdata.data);         
        })
        .catch(err => console.log(err));

    };

    const getCurrencies = q_currency => {

        fetch(currencySearch(q_currency))
            .then(res => res.json())
            .then(jdata => {
                const { data,
                        status } = jdata;
                const dataArray = [];
                if(status.error_code == 0)
                dataArray.push(data[Object.keys(data)[0]]);
                setDoneFetch(true);
                setText(status.error_code == 0 || dataArray.length == 0 ? 'Results' : 'No Results');  
                setCurrencies(dataArray);
            })
            .catch(err => console.log(err));

    };

    const validateQCurrency = (e, q_currency = document.querySelector('#q_currency').value.toLowerCase().trim()) => {
        
        if(e.type === 'keypress' && e.key !== 'Enter') return;
        
        if(q_currency && q_currency !== currentQCurrency) {           
            setCurrentQCurrency(q_currency);
            setDoneFetch(false);
            getCurrencies(q_currency);
        }

    };

    return (

        <CoinsContext.Provider value={{ doneFetch, text, currencies, validateQCurrency }}>
            { children }
        </CoinsContext.Provider>

    );

};

export default CoinsContextProvider;