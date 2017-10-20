import React, { Component } from 'react';
import { Button, Text } from 'native-base';

const CalendarEmptyItem = ({ date, onEmptyEventPress }) => {
  let { emptyDate, textColor } = styles;

  const onPress = () => {
    onEmptyEventPress(date);
  }

  return(
    <Button
      onPress={onPress}
      transparent
      style={emptyDate}>
      <Text style={textColor}>
        No event
      </Text>
    </Button>
  )
}

const styles = {
  textColor: {
    paddingTop: 30,
    color: '#000'
  }
};

export default CalendarEmptyItem;
