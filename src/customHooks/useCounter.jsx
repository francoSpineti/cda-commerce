import { useState } from 'react';

const useCounter = (stock, initial) => {
    const [count, setCount] = useState(initial);

    const aumentar = () => {
        count < stock && setCount(count + 1);
    };

    const restar = () => {
        initial < count && setCount(count - 1);
    };
    return { count, aumentar, restar };
};

export default useCounter;
