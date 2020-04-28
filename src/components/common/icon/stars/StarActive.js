import React from 'react';

const StarActive = ({status}) =>  <i className={`fas fa-star ${status ? "active" : ""}`} />;

export default StarActive;
