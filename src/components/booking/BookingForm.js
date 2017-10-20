import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Form,
  Button,
  Picker,
  Item,
  Text,
  Icon,
  List,
  View,
  Switch,
  ListItem,
  Label,
  Left,
  Separator,
  Body,
  Right } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import DateTimePicker from 'react-native-modal-datetime-picker';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

class BookingForm extends Component {
  constructor(){
    super();
    this.state = {
      selectedService: null,
      price: null,
      isDatePickerVisible: false,
      selectedDate: null,
      selectedTime: null
    };

  }

  renderServiceDropdown(vendor) {
    return(
      <Picker
        style={{paddingLeft: 0}}
        iosHeader="Select Service"
        placeholder="Select Service"
        selectedValue={this.state.selectedService}
        mode="dropdown"
        onValueChange={this.onServiceSelect}
        >

      </Picker>
    )
  }

  renderTimeDropdown() {
    return(
      <Picker
        style={{paddingLeft: 0}}
        iosHeader="Select Time"
        placeholder="Select Time"
        selectedValue={this.state.selectedTime}
        mode="dropdown"
        onValueChange={this.onTimeSelect} >

        <Item label="8:30AM - 9:00AM" value="8:30AM" />
        <Item label="9:00AM - 9:30AM" value="9:00AM" />
        <Item label="9:30AM - 10:00AM" value="9:30AM" />
        <Item label="10:00AM - 10:30AM" value="10:00AM" />
        <Item label="10:30AM - 11:00AM" value="10:30AM" />
        <Item label="11:30AM - 12:00AM" value="11:30AM" />
        <Item label="1:00PM - 1:30PM" value="1:00PM" />
      </Picker>
    )
  }

  renderDate() {
    return(
      <Button
        style={{paddingLeft: 0}}
        transparent
        onPress={this.showDatePicker}>
        {
          (this.state.selectedDate) ?
          (<Text style={{color: '#000'}}>{this.state.selectedDate}</Text>) :
          (<Text style={style.placeholderText}>Select Date</Text>)
        }
      </Button>)
    }

  renderNotes(notes){
    return(
      (notes || notes != "") ?
      (<Text style={{flex:1}} ellipsizeMode='tail' numberOfLines={1}>
      {notes}</Text>) :
      (<Text style={style.placeholderText}>Add notes..</Text>)
      )
    }

  render(){
    let { labelStyle,
      itemStyle,
      rightTextStyle,
      iconStyle,
      buttonStyle } = style;

    return(
      <View>
        <ListItem style={{paddingTop: 0, paddingBottom: 0}}>
          <Entypo
            name='tools'
            style={iconStyle} />
          {this.renderServiceDropdown({})}
        </ListItem>



        <Separator>
          <Text>Other</Text>
        </Separator>

        <ListItem>
          <SimpleLineIcons
            name='note'
            style={iconStyle}/>
          {this.renderNotes()}
          <Right><Icon style={rightTextStyle} name="arrow-forward" /></Right>
        </ListItem>

        <ListItem >
          <SimpleLineIcons
            name='screen-smartphone'
            style={iconStyle} />
          <Text>Text Reminder</Text>
          <Right><Switch value={true}/></Right>
        </ListItem>

        <Button
          block
          style={buttonStyle}
          >
          <Text>Next</Text>
        </Button>

        <DateTimePicker
          isVisible={this.state.isDatePickerVisible}
          onConfirm={this.onDatePicked}
          onCancel={this.hideDatePicker}
          mode='date'
        />
      </View>
    )
  }

}


const style = {
  labelStyle: {
    marginRight: 30
  },
  itemStyle: {
    marginLeft: 15
  },
  placeholderText: {
    color: '#aaaaad'
  },
  rightTextStyle: {
    color: '#aaaaad',
    fontSize: 18
  },
  iconStyle: {
    fontSize: 20,
    marginRight: 35
  },
  buttonStyle:{
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15
  }
}

export default connect(null)(BookingForm);
