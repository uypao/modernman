import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Content } from 'native-base';
import PlainContainer from '../common/PlainContainer';
import Header from '../common/Header';
import BookingForm from './BookingForm';

class BookingPage extends Component {
  constructor(){
    super();
  }
  render(){
    return(
      <PlainContainer>
        <Header
          title={'New Booking'}>
        </Header>
        <Content>
          <BookingForm></BookingForm>
        </Content>
      </PlainContainer>
    )
  }
}

export default BookingPage;
