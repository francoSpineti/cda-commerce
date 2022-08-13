import React from 'react';

const Boton = ({ texto, variant }) => {
    return <button className={`${variant}`}>{texto}</button>;
};

export default Boton;
