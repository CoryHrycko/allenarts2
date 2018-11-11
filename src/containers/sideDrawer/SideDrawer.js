import React from 'react';


const sideDrawer = props => {

    let drawerClaseses = 'sideDrawer';
    if(props.show) {
        drawerClaseses ='sideDrawer open';
    }
  return (
  <nav className={drawerClaseses}>
        <ul>
            <p>Placeholder</p>/>
        </ul>
    </nav>);
};



export default sideDrawer;