import React from "react";
import { connect } from 'react-redux';
import { Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  Body,
  Left
} from "native-base";
import { toggleDrawer } from '../../actions';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const routes = ["Dashboard", "Account"];

class SideBar extends React.Component {
  constructor(){
    super()

  }



  render() {
    let user = this.props.user || {}
    let { iconStyle,
      imageCoverStyle,
      avatarStyle
       } = style;
    return (
      <Container>
        <Content>
          <Image
            resizeMode = 'cover'
            style={imageCoverStyle}
            source={{
              uri: "https://facebook.github.io/react/img/logo_og.png"
            }} >


          </Image>
          <List>
            {/* DASHBOARD */}
            <ListItem icon
              onPress={() => this.onListPress('Dashboard')} >
              <Left>
                <FontAwesomeIcon
                  name='dashboard'
                  style={iconStyle}/>
              </Left>
              <Body>
                <Text>Dashboard</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const style = {
  imageCoverStyle: {
    height: 160,
    alignSelf: "stretch",
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  avatarStyle: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 22,
    marginLeft: 10,

  },
  displayNameStyle: {
    fontSize: 11,
    color: '#FFF',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5
  },
  displayPhoneStyle: {
    fontSize: 10,
    color: '#b3b3b3',
    marginLeft: 10,
    marginBottom: 10
  },
  iconStyle: {
    fontSize: 20,
    marginRight: 20
  }
}

const mapStateToProps = (state) => {
  let { auth } = state
  return { user: auth.user }
}

export default connect(null, { toggleDrawer })
(SideBar)
