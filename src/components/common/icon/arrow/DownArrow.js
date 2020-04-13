import React from 'react';

const DownArrow = ({onClick,  keyboardStatus}) => <i className={`fas fa-chevron-down ${ keyboardStatus.open? "": "active"}`} onClick={onClick}/>

export default DownArrow;
