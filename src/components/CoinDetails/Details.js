import React from 'react';
import Paper from '@material-ui/core/Paper';

const Details = ({ details }) => {
    const { id, name, symbol, description, logo, urls, category, date_added } = details;
    const descriptionParagraphs = description.split('\n');
    
    return (
        <Paper className="paper defaultPaper">
            <strong className="title">{`${ name }`}</strong><br></br>
            {
                descriptionParagraphs.map((descriptionParagraph, index) => 
                descriptionParagraph === '' || descriptionParagraph === '...' ?
                        <br key={ index } />
                    :
                        <p key={ index }>{ descriptionParagraph }</p>)
            }
            <ul>
                <li>
                   <strong>Id:</strong> 
                   <span>{ id }</span>
                </li>
                <li>
                   <strong>Symbol:</strong> 
                   <span>{ symbol }</span>
                </li>                
                {
                    date_added !== 'Invalid Date' &&
                    <li>
                        <strong>Release Date:</strong>
                        <span>{ date_added }</span>
                    </li>
                }
            </ul>
        </Paper>
    );
}

Details.displayName = 'Details';

export default Details;
