import React from 'react';

const StarActive = ({onClick, status}) =>  <i className={`fas fa-star ${status ? "active" : ""}`} onClick={onClick}/>;

export default StarActive;
