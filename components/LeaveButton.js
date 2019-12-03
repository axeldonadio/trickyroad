import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

class LeaveButton extends Component {
  render() {
    return (
      <TouchableOpacity style={leave.container} onPress={() => this.props.navigation.navigate('Home')}>
        <Image resizeMode={'contain'}
          style={leave.img}
          source={require('../assets/icons/leave.png')}
        />
      </TouchableOpacity>
    );
  }
}

const leave = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: '#FBF3F3',
    borderRadius: 40/2
  },
  img: {
    width: 20,
    height: 20
  }
});

export default withNavigation(LeaveButton);
