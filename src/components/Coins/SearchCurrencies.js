import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchCurrencies = ({ validateQCurrency }) => (    
    <Paper className='paper defaultPaper'>
        <TextField
            id="q_currency"
            label="Currency"
            margin="normal"
            variant="outlined"
            onKeyPress={ e => validateQCurrency(e) }
        />
        <IconButton onClick={ e => validateQCurrency(e) }>
            <SearchIcon />
        </IconButton>
    </Paper>
);

SearchCurrencies.displayName = 'SearchCurrencies';

export default SearchCurrencies;