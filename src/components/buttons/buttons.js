import React from "react";

const bu = props => {
    
  return (
    <button onClick={() => this.toggleAppear()}>Appear: {`${appearHome}`}</button>
    <button onClick={() => this.nextProperty()} disabled={property.index === data.properties.length-1}>Next</button>
    <button onClick={() => this.prevProperty()} disabled={property.index === 0}>Prev</button>
    
};

export default bu;