import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButtton.jsx';

const toolbar = props => (
    <header className='toolBar'>
        <nav className='toolBarNav'>
            <div className="toolBarToggle">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='toolBarLogo'><a href='root'><i className="fa fa-circle-o-notch" aria-hidden="true"></i> Alan Arts Music Group</a></div>
            ,<div className='spacer' />
            <div className='toolBarNavItems'>
                <ul>
                    <li><a href="x">Projects</a></li>
                    <li><a href="x">Bio</a></li>
                </ul>
            </div>
        </nav> 
    </header>
);

export default toolbar;