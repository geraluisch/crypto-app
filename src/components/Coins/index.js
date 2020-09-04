import React, { Fragment, useContext } from 'react';
import { CoinsContext } from '../../contexts/CoinsContext';
import SearchCurrencies from './SearchCurrencies';
import Currencies from './Currencies';
import ProgressBar from '../Common/ProgressBar';
import Message from '../Common/Message';

const Coins = () => {
    
    const { validateQCurrency, doneFetch, currencies, text } = useContext(CoinsContext);
    return (
        <Fragment>
            <SearchCurrencies validateQCurrency = { validateQCurrency } />
            {
           
                doneFetch ?
                    (currencies.length ? <Currencies text={ text } currencies={ currencies }/> : <Message text={ text }/>)
                :
                    <ProgressBar />
            }  
        </Fragment>
    );  

};

Coins.displayName = 'Coins';

export default Coins;

