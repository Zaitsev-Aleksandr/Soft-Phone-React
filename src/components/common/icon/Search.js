import React from 'react';

const Search = ({addSearch}) => {
    return (
        <i className="fas fa-search" onClick={addSearch}/>
    );
};

export default Search;
