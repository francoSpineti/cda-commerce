import React, { useContext } from 'react';
import style from './CardDetail.module.css';
import Counter from '../Counter/Counter';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { isIn } from '../../utils/utils';

const CardDetail = ({ item }) => {
    const { addToCart, cart } = useContext(CartContext);

    const isInCartDetail = isIn(cart, item.id);

    const navigate = useNavigate();

    const onAdd = (cantidad) => {
        addToCart(item, cantidad);
        navigate('/cart');
    };

    return (
        <div className={style.detail}>
            <img src={item?.img} alt={item?.name} />
            <div className={style.info}>
                <h2>{item?.name}</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem nulla voluptas consequuntur aut quia fugit cumque
                    aperiam, corporis voluptate repudiandae ducimus qui, beatae
                    architecto culpa dolore nemo illum, enim iste?
                </p>
                <h4>#{item?.categoria}</h4>
                <h3>$ {item?.price}.-</h3>
                {isInCartDetail ? (
                    <h4>
                        Ya está en el <Link to="/cart">carrito</Link>
                    </h4>
                ) : (
                    <Counter stock={item?.stock} initial={1} onAdd={onAdd} />
                )}
            </div>
        </div>
    );
};

export default CardDetail;