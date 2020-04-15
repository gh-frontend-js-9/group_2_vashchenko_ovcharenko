import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './AuthorCalendar.scss'

export default function AuthorCalendar() {
  // return <DayPicker />;
  return (
  <div>
   <h2>NEED FIX DAY Picker</h2>
      <p>Error text</p>
      <p>
        Overload 1 of 2, '(props: Readonly DayPickerProps): DayPicker', gave the following error.
        Type '{}' is missing the following properties from type 'Readonly DayPickerProps': renderDay, renderWeek
        Overload 2 of 2, '(props: DayPickerProps, context?: any): DayPicker', gave the following error. \
        Type '{}' is missing the following properties from type 'Readonly DayPickerProps': renderDay, renderWeek  TS2769
      </p>
  </div>
);
}
