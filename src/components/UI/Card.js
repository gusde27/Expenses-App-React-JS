import React from 'react';
import './Card.css';

const Card = (cardItem) => {
    //for add all className of CSS File from outside
    const classes = 'card ' + cardItem.className;

    return <div className= { classes }>{ cardItem.children }</div>
}

export default Card;