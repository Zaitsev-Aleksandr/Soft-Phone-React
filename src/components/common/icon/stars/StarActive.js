import React from 'react';

const StarActive = ({status, onClick}) =>  <i className={`fas fa-star ${status ? "active" : ""}`} onClick={onClick} />;

export default StarActive;
