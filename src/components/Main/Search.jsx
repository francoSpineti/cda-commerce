import React, { useState } from 'react';

const Search = ({ handleQuery }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleQuery(text);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Encontrá lo que buscás"
                onChange={handleChange}
                value={text}
            />
            <button>Buscar</button>
            <button onClick={() => setText('')}>Todos</button>
        </form>
    );
};

export default Search;
