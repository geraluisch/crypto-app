import React, { createContext, useState, useEffect } from 'react';
import { currencyInfoGet } from '../constants';

export const DetailsContext = createContext();

const DetailsContextProvider = ({ children }) => {
    const currency_id = window.location.pathname.split('/')[3];
    const [doneFetchCurrencyInfo, setDoneFetchCurrencyInfo] = useState(false);
    const [details, setDetails] = useState([]);

   
    useEffect(() => getDetails(currency_id), [currency_id]);

    const getDetails = currency_id => {
        fetch(currencyInfoGet(currency_id))
            .then(res => res.json())
            .then(jdata => {
                const { data,
                        status } = jdata;      
                setDoneFetchCurrencyInfo(true);
                setDetails(data[Object.keys(data)[0]]);                                      
            })
            .catch(err => console.log(err));
    };  

    return (
        <DetailsContext.Provider value={{ doneFetchCurrencyInfo, details }}>
            { children }
        </DetailsContext.Provider>
    );
}

export default DetailsContextProvider;