import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import value from './../../assets/img/value.png';
import rank from './../../assets/img/rank.png';
import ButtonPrimary from '../Common/ButtonPrimary';

const Currency = ({ id, name, price, cmc_rank, slug }) => (
    <Grid item xs={ 12 } sm={ 6 }>
        <Paper className="defaultPaper">
            <h3>{ name }</h3>
            <ul>
                <li>
                    <img alt="value" src={ value } />
                    <strong> Price: </strong>
                    <span>${ price }</span>
                </li>
                <li>
                    <img alt="rank" src={ rank } />
                    <strong> Rank: </strong>
                    <span>{ cmc_rank }</span>
                </li>
                <li>
                    <ButtonPrimary type="details" to={`/currency/info/${ slug }`}/>
                </li>
            </ul>
        </Paper>

    </Grid>
);

Currency.displayName = 'Currency';

export default Currency;