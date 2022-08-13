import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavContext } from '../../context/FavContext';
import css from './Card.module.css';
import { isIn } from '../../utils/utils';

const Card = ({ prod }) => {
    const { addToFav, fav } = useContext(FavContext);

    const isInFav = isIn(fav, prod.id);

    return (
        <div className={css.card}>
            <img src={prod.img} alt={prod.name} />
            <div className={css.info}>
                <h3>{prod.name}</h3>
                <h4>$ {prod.price}</h4>
                <Link className={css.detalle} to={`/detail/${prod.id}`}>
                    Ver Detalle
                </Link>
                <button className={isInFav ? css.favButton : css.favButtonQuit} onClick={() => addToFav(prod)}>
                    {isInFav ? 'Quitar de fav' : 'Agregar a fav'}
                </button>
            </div>
        </div>
    );
};

export default Card;
