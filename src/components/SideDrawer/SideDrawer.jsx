import React from 'react';

const sideDrawer = props => {
    let drawerClaseses = 'sideDrawer';
    if(props.show) {
        drawerClaseses ='sideDrawer open';
    }
  return (
  <nav className={drawerClaseses}>
        <ul>
            <li><a href='/'>Stats</a></li>
            <li><a href='/'>Placeholder</a></li>
        </ul>
    </nav>);
};

export default sideDrawer;