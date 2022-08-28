import React from 'react';
import foto from '../img/joey-banks-mustang.jpg'

function Carros({carro1, carro2, carro3, carro4, carro5}) {
    return ( 
        <>
            <img src={foto} alt="" />
            <ul>
                <li>{carro1}</li>
                <li>{carro2}</li>
                <li>{carro3}</li>
                <li>{carro4}</li>
                <li>{carro5}</li>
            </ul>
        </>
     );
}

export default Carros;