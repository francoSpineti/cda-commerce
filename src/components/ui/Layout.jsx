import React from 'react';

const Layout = ({ children }) => {
    return (
        <div
            style={{
                backgroundColor: 'blue',
                margin: '10px',
                borderRadius: '10px',
            }}
        >
            {children}
        </div>
    );
};

export default Layout;
