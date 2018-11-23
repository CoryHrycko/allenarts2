import React from 'react';
import Month from './Month'
class DatePicker extends React.PureComponent{
    render(){
        return(
            <div className="DatePickerContainer">
                <div className="DatePickerContainer_Title">MARCH</div>
                <Month/>
            </div>
        )
    }
}

export default DatePicker;