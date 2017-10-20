import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,
  Button,
  Icon,
  Header,
  Left,
  Right,
  Body,
  Title,
  Text } from 'native-base';
import { back,
  toggleDrawer } from '../../actions';
import { View, StatusBar, Platform } from 'react-native';
import { create } from 'react-native-platform-stylesheet';

class HeaderComponent extends Component {
  constructor(){
    super();
    this.onPressLeftNav = this.onPressLeftNav.bind(this);
  }

  setStyle(){
    if (Platform.OS == 'ios') return null
    return { backgroundColor: 'white' }
  }

  isParentRoute(routeName) {
    let parentRoutes = ['Dashboard', 'Account'];
    return (parentRoutes.includes(routeName));
  }

  componentWillMount(){
    let {navigation} = this.props;
    this.routeName = navigation.routes[navigation.index].routeName;
  }

  renderLeftNav() {

    if (this.isParentRoute(this.routeName)){
      return(<Icon style={{color: '#0076FF'}} name='ios-menu'></Icon>)
    }
    return(<Icon style={{color: '#0076FF'}} name='ios-arrow-round-back'></Icon>)
  }

  onPressLeftNav() {
    let { leftNavOnClick, back, toggleDrawer } = this.props;
    /* override if leftnav props is passed */
    if (leftNavOnClick) return leftNavOnClick();
    return this.isParentRoute(this.routeName) ? toggleDrawer() : back();

  }

  render(){
    let { headerContentStyle,
      textStyle,
      leftHeaderStyle,
      rightHeaderStyle} = styles;
    return(
      <Header
        style={this.setStyle()}>
        <StatusBar
          animated
          barStyle='dark-content'
          backgroundColor='#f7f7f7'/>
        <Left style={{flex:1}}>
          <Button
            transparent
            onPress={this.onPressLeftNav} >
             {this.renderLeftNav()}
          </Button>
        </Left>
        <Body style={{flex:1}}>
          <Title>
            <Text>
              {this.props.title}
            </Text>
          </Title>
        </Body>
          <Right style={{flex:1}}>
            <Button
              transparent>
              {this.props.rightNav}
            </Button>
          </Right>
      </Header>
    )
  }
};

const styles = create({
  headerContentStyle:{
    flex: 1
  },
  textStyle: {
    fontSize: 18,
    android: {
      color: '#000',
      fontWeight: 'normal'
    }
  },
  leftHeaderStyle: {
    alignItems: 'flex-start',
    flexDirection: 'row'
  },
  rightHeaderStyle: {
    alignItems: 'flex-end',
    flexDirection: 'row'
  }
})

const mapStateToProps = state => ({ navigation: state.stack });

export default connect(mapStateToProps, {
  back,
  toggleDrawer
})(HeaderComponent);
