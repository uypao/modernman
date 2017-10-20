import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../common/Header';
import PlainContainer from '../common/PlainContainer';
import { Content,
  Icon,
  Badge } from 'native-base';
import moment from 'moment';
import Calendar from '../common/calendar/Calendar';

class DashboardPage extends Component {
  constructor(){
    super();
    this.state = {
      bookings: {},
      dateToday: '2017-10-01',/* moment(new Date()).format() */
      selectedMonth: moment().format("MMMM")
    };
    this.onCalendarDayPress = this.onCalendarDayPress.bind(this);
    this.onCalendarDayChange = this.onCalendarDayChange.bind(this);
  }

  componentWillMount(){
    this.fetchBookings();
  }

  onCalendarDayPress(day){
    let selectedMonth = moment.months(day.month - 1);
    this.setState({ selectedMonth });
  }

  onCalendarDayChange(day){
    let selectedMonth = moment.months(day.month - 1);
    this.setState({ selectedMonth });
  }

  fetchBookings(){
    // TODO: move to API
    let bookings = {};
    for (x=1;x<=30;x++){
      if (x < 10) x = `0${x}`;
      bookings[`2017-09-${x}`] = [];
    };
    for (x=1;x<=31;x++){
      if (x < 10) x = `0${x}`;
      bookings[`2017-10-${x}`] = [];
    };
    bookings['2017-10-01'].push({name: 'Paolo Uy', height: 100, service: 'Haircut \nWith Gabriel Briones', time: '9:30AM - 10:00AM' });
    bookings['2017-10-01'].push({name: 'DJ Buan', height: 100, service: 'Haircut \nWith Gabriel Briones', time: '10:00AM - 10:30AM' });
    bookings['2017-10-03'].push({name: 'Augie Balignasay', height: 100, service: 'Haircut \nWith Gabriel Briones', time: '10:00AM - 10:30AM' });
    bookings['2017-10-02'].push({name: 'Justin Montalban', height: 100, service: 'Haircut \nWith Gabriel Briones', time: '4:30PM - 05:00PM' });
    bookings['2017-10-05'].push({name: 'Mac Galan', height: 100, service: 'Haircut \nWith Gabriel Briones', time: '10:00AM - 10:30AM' });
    bookings['2017-10-21'].push({name: 'Paolo Uy', height: 100, service: 'Haircut \nWith Gabriel Briones', time: '9:30AM - 10:00AM' });
    this.setState({
      bookings
    });

  }

  render(){
    let { bookings, selectedMonth, dateToday } = this.state;
    return(
      <PlainContainer>
        <Header title={selectedMonth}></Header>
        <Calendar
          onCalendarDayPress={this.onCalendarDayPress}
          onCalendarDayChange={this.onCalendarDayChange}
          dateToday={dateToday}
          bookings={bookings}
          />
      </PlainContainer>
    )
  }
}




export default DashboardPage;
