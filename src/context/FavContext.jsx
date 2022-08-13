import { createContext, useEffect, useState } from 'react';

export const FavContext = createContext();

export const FavProvider = (props) => {
    const [fav, setFav] = useState(() => {
        const localData = localStorage.getItem('itemsFav');
        return localData ? JSON.parse(localData) : [];
    });

    const addToFav = (item) => {
        if (isInFav(item.id)) {
            const filterFavorites = fav
                .map((favo) =>
                    favo.id === item.id ? { ...favo, favorite: false } : favo
                )
                .filter((favo) => favo.id !== item.id);
            setFav(filterFavorites);
        } else {
            setFav([...fav, { ...item, favorite: true }]);
        }
    };

    const isInFav = (id) => {
        return fav.some((favorite) => favorite.id === id);
    };

    const clearFav = () => {
        setFav([]);
        localStorage.removeItem('itemsFav');
    };

    useEffect(() => {
        localStorage.setItem('itemsFav', JSON.stringify(fav));
    }, [fav]);

    return (
        <FavContext.Provider value={{ fav, addToFav,clearFav }}>
            {props.children}
        </FavContext.Provider>
    );
};
