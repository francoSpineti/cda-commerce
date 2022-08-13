import React from 'react';
import Card from './Card';

const CardList = ({ items, query, categoryId }) => {
    const getFilteredItems = (prod, texto) => {
        if (!texto) {
            return prod;
        }

        return prod.filter((prod) => prod.name.toLowerCase().includes(query));
    };

    const itemsFiltrados = getFilteredItems(items, query);

    const datos = categoryId ? items : itemsFiltrados;

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '90%',
                justifyContent: 'center',
            }}
        >
            {datos.map((prod) => (
                <Card prod={prod} key={prod.id} />
            ))}
        </div>
    );
};

export default CardList;
