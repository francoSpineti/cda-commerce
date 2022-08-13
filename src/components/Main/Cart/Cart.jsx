import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import CartDetail from './CartDetail';
import css from './Cart.module.css';
import Form from '../../Form/Form';

const Cart = () => {
    const { cart, clearCart, deleteOne, totalPrice, disminuir, aumentar } =
        useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className={css.cartContainer}>
                <h1>
                    Aún no tenés ningún producto en el carrito,{' '}
                    <Link to="/">Acá</Link> vas a poder encontrar todo lo que
                    buscás
                </h1>
            </div>
        );
    }
    return (
        <>
            <div className={css.cartContainer}>
                {cart.map((prod) => (
                    <CartDetail
                        key={prod.id}
                        prod={prod}
                        deleteOne={deleteOne}
                        disminuir={disminuir}
                        aumentar={aumentar}
                    />
                ))}
                <div>
                    <button className={css.vaciar} onClick={clearCart}>
                        Vaciar carrito
                    </button>
                    <h2>Total: ${totalPrice}</h2>
                </div>
                <Form
                    cart={cart}
                    totalPrice={totalPrice}
                    clearCart={clearCart}
                />
            </div>
        </>
    );
};

export default Cart;
