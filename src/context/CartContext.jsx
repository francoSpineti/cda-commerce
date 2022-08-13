import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = (props) => {
        const [cart, setCart] = useState(() => {
        const localData = localStorage.getItem('items');
        return localData ? JSON.parse(localData) : [];
    });
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalUnidades, setTotalUnidades] = useState(0);

    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            sumarCantidad(item, cantidad);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const sumarCantidad = (item, cantidad) => {
        const productsUpdate = cart.map((prod) => {
            if (prod.id === item.id) {
                const newProduct = {
                    ...prod,
                    cantidad: prod.cantidad + cantidad,
                };
                return newProduct;
            } else {
                return prod;
            }
        });
        setCart(productsUpdate);
    };

    const deleteOne = (id) => {
        const productosFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(productosFiltrados);
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('items');
    };

    const total = () => {
        const copia = [...cart];
        let count = 0;
        copia.forEach((prod) => {
            count = count + prod.price * prod.cantidad;
        });
        return setTotalPrice(count);
    };

    const unidades = () => {
        const copia = [...cart];
        let count = 0;
        copia.forEach((prod) => {
            count = count + prod.cantidad;
        });
        return setTotalUnidades(count);
    };

    const aumentar = (item) => {
        const cartUpdate = cart.map((prod) =>
            prod.id === item.id
                ? { ...prod, cantidad: prod.cantidad + 1 }
                : prod
        );
        setCart(cartUpdate);
    };

    const disminuir = (item) => {
        const cartUpdate = cart.map((prod) =>
            prod.id === item.id
                ? { ...prod, cantidad: prod.cantidad - 1 }
                : prod
        );
        setCart(cartUpdate);
    };

    useEffect(() => {
        total();
        unidades();
        localStorage.setItem('items', JSON.stringify(cart));
        // eslint-disable-next-line
    }, [cart]);

    return (
        <CartContext.Provider
            value={{
                cart,
                totalPrice,
                totalUnidades,
                addToCart,
                clearCart,
                deleteOne,
                total,
                disminuir,
                aumentar,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
