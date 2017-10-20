import React from 'react';
import { Container } from 'native-base';

const PlainContainer = (props) => {
  return (
    <Container style={style.containerStyle}>
      {props.children}
    </Container>
  );
};

const style = {
  containerStyle: {
    backgroundColor: '#fff'
  }
}

export default PlainContainer
