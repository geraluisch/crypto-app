import React, { Fragment, useContext } from 'react';
import { DetailsContext } from '../../contexts/DetailsContext';
import ProgressBar from './../Common/ProgressBar';
import Message from './../Common/Message';
import ButtonPrimary from './../Common/ButtonPrimary';
import Details from './Details';

const CurrencyDetails = () => {
    const { doneFetchCurrencyInfo, details } = useContext(DetailsContext);
    
    return (
        <Fragment>           
            {   
                doneFetchCurrencyInfo ?
                    (!Array.isArray(details) ?
                        
                        <Details details={ details } />
                    : 
                        <Message text="No Results"/>)
                : 
                    <ProgressBar />
            }
            <ButtonPrimary type="back" to="/" />
        </Fragment>
    );
};

CurrencyDetails.displayName = 'CurrencyDetails';

export default CurrencyDetails;