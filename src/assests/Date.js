import React, { Component } from 'react';

export class DateComponent extends Component {
    constructor() {
        super();

        let today = new Date(),
            date = today.getFullYear();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>
                {this.state.date}
            </div>
        );
    }
}

export default DateComponent;