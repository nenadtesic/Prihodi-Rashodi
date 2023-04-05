import React from 'react';

const Stanje = ({prihodi, rashodi}) => {

    let ukupnoPrihodi = prihodi.reduce((total, el) => total + el.value, 0)
    let ukupnoRashodi = rashodi.reduce((total, el) => total + el.value, 0)
    let ukupno = ukupnoPrihodi - ukupnoRashodi
    
    return (
        <div>
            <h1>Dostupan budzet:</h1>
            <p>Ukupno: {ukupno}</p>
            <p>Prihodi: <span>{ukupnoPrihodi}</span></p>
            <p>Rashodi: <span>{ukupnoRashodi}</span></p>
        </div>
    );
};

export default Stanje;