import React from 'react';
import calculatePercent from './calculatePercent';

const Transakcija = ({transakcija, setTransakcije, prihodi, prihod}) => {
    return (
        <div>
            <p>{transakcija.desc} -- {transakcija.value}</p>
            <button onClick={()=>{
                setTransakcije(prev => {
                    let kopija = [...prev]
                    let indeks = kopija.indexOf(transakcija)
                    kopija.splice(indeks, 1)
                    return kopija
                })
            }}>Obrisi</button>
            {prihod? "" : <p>{calculatePercent(transakcija.value, prihodi)}%</p> }
        </div>
    );
};

export default Transakcija;