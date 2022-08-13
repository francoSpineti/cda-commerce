import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../customHooks/useFetch';
import CardList from './CardList';
import Search from './Search';

const CardContainer = () => {
    const [query, setQuery] = useState('');
    const { categoryId } = useParams();

    const endpoint = categoryId ? `category/${categoryId}` : '';

    // eslint-disable-next-line
    const { data, loading, error } = useFetch(endpoint);

    const handleQuery = (params) => {
        setQuery(params);
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '85vh',
                margin: '30px',
            }}
        >
            {data && (
                <>
                    {loading ? (
                        <h1>Cargando...</h1>
                    ) : (
                        <>
                            {categoryId ? (
                                <h2>
                                    Conocé nuestras{' '}
                                    {categoryId.toLocaleLowerCase()}
                                </h2>
                            ) : (
                                <h2>Mirá todos nuestros artículos 😎</h2>
                            )}
                            <Search handleQuery={handleQuery} />
                            <CardList
                                items={data}
                                query={query}
                                categoryId={categoryId}
                            />
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default CardContainer;
