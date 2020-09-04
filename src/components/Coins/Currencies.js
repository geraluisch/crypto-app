import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Currency from  './Currency';
import Message from '../Common/Message';

const Currencies = ({ currencies, text }) => (

    <Fragment>
        <Message text={ text } />
        <div className="root">
            <Grid container spacing={ 3 } justify="center" >
                {                                           
                    currencies.map(currency => {                        
                        const {
                            id,
                            name,
                            quote,
                            cmc_rank,
                            slug
                        } = currency
                        {
                            return (                                   
                                <Currency
                                    key={ id } 
                                    name={ name }
                                    price={ quote.USD.price } 
                                    cmc_rank={ cmc_rank }  
                                    slug={ slug }                     
                                />
                            );
                        }
                    })                        
                }
            </Grid>
        </div>
    </Fragment>


);

Currencies.displayName = 'Currencies';

export default Currencies;