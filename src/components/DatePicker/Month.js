import React from 'react';
import Weekday from'./Weekday'

const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]


class Month extends React.PureComponent{
    render(){
        const weekdayMarkup = weekDays.map(weekDay =>{
            return(
                <Weekday 
                key={weekDay}
                title={abbrevFromWeekday(weekDay)}
                label={weekDay}
                />
            )
        });
        return(
            <React.Fragment>
                <div className="weekdayContainer">{weekdayMarkup}</div>
                <div>
                    {"all dates"}
                </div>
            </React.Fragment>

        )
    }
};

function abbrevFromWeekday(weekDay){
    return weekDay.substring(0,2);
}

export default Month