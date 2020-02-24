import React from 'react';

const Menu = ({onClick}) => {
    return (
        <i className="fas fa-ellipsis-v" onClick={onClick}/>
    );
};

export default Menu;
