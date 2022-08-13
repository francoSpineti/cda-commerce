import React from 'react';
import css from './Footer.module.css';
import instagram from '../../assets/instagram.ico';
import facebook from '../../assets/facebook.ico';
import linkedin from '../../assets/linkedin.ico';

const categories = [
    {
        id: 1,
        name: 'Facebook',
        path: 'https://es-la.facebook.com/apasionadosIT/',
        image: facebook
    },
    {
        id: 2,
        name: 'Instagram',
        path: 'https://www.instagram.com/cda_informatica/?hl=es',
        image: instagram
    },
    {
        id: 3,
        name: 'Linkedin',
        path: 'https://ar.linkedin.com/company/cda-informatica?original_referer=https%3A%2F%2Fwww.google.com%2F',
        image: linkedin
    }
];

const Footer = () => {

    return (<>
        <nav className={css.navFooter}>
        <h1 className={css.frase}>Seguinos en nuestras Redes! </h1>
            <ul>
                {categories.map((category) => (
                  <a href={category.path} target="_blank"> <img src={category.image} /> {category.name}</a>
                ))}
            </ul>
        </nav>
        </>
    );
};

export default Footer;
