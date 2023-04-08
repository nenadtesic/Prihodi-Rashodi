import React from 'react';
import Prihod from './Prihod/Prihod';
import Rashod from './Rashod/Rashod';
import Transakcija from './Transakcija';

const Transakcije = ({ transakcije, prihod, setTransakcije, prihodi }) => {
    return (
        <div>
            {transakcije.map(transakcija => <Transakcija key={transakcija.id} transakcija={transakcija} setTransakcije={setTransakcije} prihodi={prihodi} prihod={prihod} />)}
        </div>
    );
};

export default Transakcije;