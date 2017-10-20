import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import PlainContainer from '../common/PlainContainer';
import { Text,
  Content,
  Form,
  Button,
  Item,
  Input,
  Spinner } from 'native-base';
import { goToDashboard } from '../../actions';

class LoginPage extends Component {
  constructor(){
    super();
  }

  render(){
    let { itemStyle,
      buttonStyle } = style;
    return(
      <PlainContainer>
        <Header title={'Please Login'}>
        </Header>
        <Content padder>
          <Form>
            <Item style={itemStyle}>
              <Input
                autoCorrect={false}
                placeholder="Email" />
            </Item>
            <Item style={itemStyle}>
               <Input
                 autoCorrect={false}
                 secureTextEntry
                 placeholder="Password" />
            </Item>
            <Button
              block
              onPress={this.props.goToDashboard}
              style={buttonStyle} >
                <Text>Login</Text>
            </Button>
          </Form>
        </Content>
      </PlainContainer>
    )
  }
}

const style = {
  itemStyle: {
    marginLeft: 0
  },
  buttonStyle: {
    marginTop: 30,
    backgroundColor: '#0076FF'
  }
}

export default connect(null, {goToDashboard})(LoginPage);
