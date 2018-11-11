import React from 'react';

const drawerToggleButton = props => (
    <button className='toggleButton' onClick={props.click}>
        <div className='toggleButtonLine'/>
        <div className='toggleButtonLine'/>
        <div className='toggleButtonLine'/>
    </button>
);

export default drawerToggleButton;