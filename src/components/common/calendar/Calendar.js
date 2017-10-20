import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Agenda } from 'react-native-calendars';
import CalendarItem from './CalendarItem';
import CalendarEmptyItem from './CalendarEmptyItem';
import { goToBooking } from '../../../actions';


class Calendar extends Component {
  constructor(){
    super();
    this.state = {
      bookings: {}
    };
    this.onDayPress = this.onDayPress.bind(this);
    this.onDayChange = this.onDayChange.bind(this);
    this.loadBookings = this.loadBookings.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderEmptyDate = this.renderEmptyDate.bind(this);
    this.rowHasChanged = this.rowHasChanged.bind(this);
    this.onEventPress = this.onEventPress.bind(this);
    this.onEmptyEventPress = this.onEmptyEventPress.bind(this);
  }

  loadBookings(day) {
    let { bookings } = this.props;
    this.setState({
      bookings
    })
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  onDayPress(day){
    this.props.onCalendarDayPress(day);
  }

  onDayChange(day){
    this.props.onCalendarDayChange(day);
  }

  onEventPress(booking) {
    this.props.goToBooking(booking);
    console.log(booking, 'onEventPress');
  }

  onEmptyEventPress(date) {
    this.props.goToBooking();
    console.log(date, 'onEmptyEventPress');
  }

  renderItem(item){
    return(
      <CalendarItem
        onEventPress={this.onEventPress}
        booking={item}
      />
    )
  }

  renderEmptyDate(date) {
    return (
      <CalendarEmptyItem
        date={date}
        onEmptyEventPress={this.onEmptyEventPress}
        />
    );
  }

  render(){
    let { dateToday } = this.props;
    return(
      <Agenda
        items={this.state.bookings}
        loadItemsForMonth={this.loadBookings}
        selected={dateToday}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        onDayPress={this.onDayPress}
        onDayChange={this.onDayChange}
      />
    )
  }

}


export default connect(null, {goToBooking})(Calendar);
