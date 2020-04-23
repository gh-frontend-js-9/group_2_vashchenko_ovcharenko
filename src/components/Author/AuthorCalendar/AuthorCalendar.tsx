import React, {Component} from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './AuthorCalendar.scss'



class AuthorCalendar extends Component<any,any> {
    render() {
        // @ts-ignore
        return (<DayPicker showOutsideDays  />);
    }
}

export default AuthorCalendar;

