import React, { useState } from 'react';
import {v1 as uuidv1} from "uuid"

const Forma = ({ setPrihodi, setRashodi }) => {
    const [tip, setTip] = useState('-1')
    const [opis, setOpis] = useState('')
    const [iznos, setIznos] = useState('')
    return (
        <form onSubmit={e => {
            e.preventDefault()

            switch(tip) {
                case "+": setPrihodi(prev => [...prev, {id: uuidv1(), desc: opis, value: iznos}]); break;
                case "-": setRashodi(prev => [...prev, {id: uuidv1(), desc: opis, value: iznos}]); break;
                default: console.warn("Mora se uneti tip"); break;
            }
            setTip('-1')
            setOpis('')
            setIznos('')
        }}>
            <select value={tip} onChange={e => {
                setTip(e.target.value)
            }}>
                <option value="-1" disabled hidden>Prihod ili Rashod</option>
                <option value="+">Prihod</option>
                <option value="-">Rashod</option>
            </select>

            <input value={opis} placeholder='Opis' onChange={e => {setOpis(e.target.value)}}/>
            <input value={iznos} type='number' placeholder='Iznos' onChange={e => {setIznos(Number(e.target.value))}}/>
            <input type="submit" value="Dodaj" />
            {/* <button type="submit" value="Dodaj">Dodaj</button> */}
        </form>
    );
};

export default Forma;