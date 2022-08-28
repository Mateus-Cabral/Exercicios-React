import React from 'react';

export default ({funcao}) => {

    let btn = {
        display:'block',
        margin:'auto',
        marginTop:'1em'
    }

    return ( 
        <>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi sapiente quisquam provident sint iure deleniti officia. Quidem, itaque voluptatem similique cupiditate, enim ipsa numquam possimus fugiat nobis dolore ipsum.</h2>
            <a href="#">A</a>
            <a href="#">B</a>
            <a href="#">C</a>
            <a href="#">D</a>
            <button style={btn} onClick={(e)=>funcao()}>Clique aqui para ativar um evento no console</button>
        </>

     );
}