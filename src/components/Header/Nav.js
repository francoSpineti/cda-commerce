import React, { useContext } from 'react';
import css from './Nav.module.css';
import carrito from '../../assets/cart.svg';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const categories = [
    {
        id: 1,
        name: 'Remeras',
        path: '/category/remeras',
    },
    {
        id: 2,
        name: 'Camisas',
        path: '/category/camisas',
    },
    {
        id: 3,
        name: 'Gorras',
        path: '/category/gorras',
    },
    {
        id: 4,
        name: 'Billeteras',
        path: '/category/billeteras',
    },
    {
        id: 5,
        name: 'Riñoneras',
        path: '/category/rinoneras',
    },
];

const Nav = ({ isInHedaer}) => {
    const { totalUnidades } = useContext(CartContext);

    return (
        <nav className={isInHedaer ? css.nav : css.navFooter}>
            <Link className={css.logo} to="/">
                <h2>CDA</h2>
            </Link>

            <ul>
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        className={isInHedaer ? css.linkNav : css.linkFooter}
                        to={category.path}
                    >
                        {category.name}
                    </Link>
                ))}
            </ul>
            <div className={css.favCart}>
                <Link className={css.fav} to="/favorites">
                    Favoritos
                </Link>
                <Link className={css.cart} to="/cart">
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 3,
                        }}
                    >
                        <img
                            src={isInHedaer ? carrito : 'logo192.png'}
                            alt="logo"
                            className={css.logoCart}
                        />

                        <span>
                            {totalUnidades === 0 ? null : totalUnidades}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
 
    );
};

export default Nav;
