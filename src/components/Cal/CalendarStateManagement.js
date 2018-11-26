import React, { Component } from 'react';

import Calendar from '../DatePicker/';


const style = {
  position: "relative",
  margin: "50px auto"
}

class Clickcal extends Component {
  onDayClick = (e, day) => {
    alert(day); 
  }
  
  render() { 
    return (
      <div className="">
        <Calendar style={style} width="302px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
      </div>
    );
  }
}

export default Clickcal;