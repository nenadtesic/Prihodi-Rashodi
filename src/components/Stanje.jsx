import React from 'react';
import calculatePercent from './calculatePercent';

const Stanje = ({prihodi, rashodi}) => {

    let ukupnoPrihodi = prihodi.reduce((total, el) => total + el.value, 0)
    let ukupnoRashodi = rashodi.reduce((total, el) => total + el.value, 0)
    let ukupno = ukupnoPrihodi - ukupnoRashodi
    
    return (
        <div>
            <h1>Stanje:</h1>
            <p>Dostupan budžet: {ukupno}</p>
            <p>Prihodi: <span>{ukupnoPrihodi}</span></p>
            <p>Rashodi: <span>{ukupnoRashodi}</span></p>
            <p>Procenat: {calculatePercent(ukupnoRashodi, prihodi)}% </p>
        </div>
    );
};

export default Stanje;