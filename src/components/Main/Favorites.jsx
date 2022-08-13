import React, { useContext } from 'react';
import { FavContext } from '../../context/FavContext';
import css from './Favorites.module.css';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const { fav, clearFav } = useContext(FavContext);

    if (fav.length === 0) {
        return (
            <div className={css.favContainer}>
                <h1>
                    Aún no tenés ningún producto en tu seccion de favoritos.{' '}
                    <Link to="/">Acá</Link> vas a poder encontrar todo lo que
                    buscás
                </h1>
            </div>
        );
    }
    return (
        <>
            <div className={css.favContainer}>
                {fav.map((prod) => (
                   <ul>
                        <img src={prod?.img} width="170" height="170"/>
                        <h4>{prod?.name}</h4>
                        <h4>{prod?.price}</h4>
                        <h4>{prod?.categoria}</h4>
                   </ul>
                ))}
                <div>
                    <button className={css.vaciarFav} onClick={clearFav}>
                        Limpiar Favoritos
                    </button>
                </div>
            </div>
        </>
    );
};

export default Favorites;