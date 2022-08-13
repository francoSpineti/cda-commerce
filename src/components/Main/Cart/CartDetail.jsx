import React from 'react';
import s from './CartDetail.module.css';

const CartDetail = ({ prod, deleteOne, aumentar, disminuir }) => {
    return (
        <div className={s.containerCartDetail}>
            <div className={s.infoCartDetail}>
                <img src={prod.img} alt={prod.name} />
                <article>
                    <h3>{prod.name}</h3>
                    <div className={s.subtotal}>
                        <button
                            className={s.boton}
                            onClick={() => disminuir(prod)}
                            disabled={prod.cantidad === 1}
                        >
                            -
                        </button>
                        <h4>{prod.cantidad} </h4>
                        <button
                            className={s.boton}
                            onClick={() => aumentar(prod)}
                            disabled={prod.cantidad === prod.stock}
                        >
                            +
                        </button>
                        <h4> * $ {prod.price}</h4>
                        <h4>= ${prod.price * prod.cantidad}.-</h4>
                    </div>
                </article>
                <button
                    className={s.botonDelete}
                    onClick={() => deleteOne(prod.id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default CartDetail;
