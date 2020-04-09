import React from 'react';

const StarsPass = ({onClick, status }) => <i className={`far fa-star ${status? "active":""}`} onClick={onClick}/>;

export default StarsPass;
