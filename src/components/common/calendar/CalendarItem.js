import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import UserAvatar from 'react-native-user-avatar';

const CalendarItem = ({onEventPress, booking}) => {
  let { buttonStyle } = styles;

  const onPress = () =>{
    onEventPress(booking);
  }

  return(
    <Button
      style={buttonStyle}
      onPress={onPress}>
      <View >
        <Text style={{marginBottom: 5}}>{booking.time}</Text>
        <Text style={{marginBottom: 5, fontWeight: '500'}}>{booking.name}</Text>
        <Text style={{color: '#b7b7b7'}}>{booking.service}</Text>
      </View>
      <View style={{flex: 1}}>
        <UserAvatar style={{alignSelf: 'flex-end'}} size="50" name={booking.name}
          colors={['#ff5050', '#de7b0b', '#0bde9e','#b80bde']}/>
      </View>
    </Button>
  )
}

const styles = {
  buttonStyle: {
    height: 100,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: 'white',
    flex: 1
  },
  itemStyle: {
    flex: 1,
    flexDirection: 'row'
  }
};

export default CalendarItem;
