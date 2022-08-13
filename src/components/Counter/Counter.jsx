import React from 'react';
import useCounter from '../../customHooks/useCounter';
import styles from './Counter.module.css';

const Counter = ({ stock, initial, onAdd }) => {
    const { count, aumentar, restar } = useCounter(stock, initial);

    const agregar = () => {
        onAdd(count);
    };

    return (
        <div className={styles.counter}>
            <div className={styles.addSub}>
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={aumentar}>+</button>
            </div>

            <div>
                <button className={styles.add} onClick={agregar}>
                    Add
                </button>
            </div>
        </div>
    );
};

export default Counter;
