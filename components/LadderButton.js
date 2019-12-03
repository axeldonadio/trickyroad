import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Image, Text } from 'react-native';

export default class LadderButton extends Component {
  render() {
    return (
      <TouchableOpacity style={score.container} onPress ={() => {this.onPress()}}>
        <Image resizeMode={'contain'}
          style={score.img}
          source={require('../assets/icons/ladder.png')}
        />
      </TouchableOpacity>
    );
  }
  onPress() {
    alert('Simple Button pressed')
  }
}

const score = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    margin: 30,
  },
  img: {
    width: 40,
    height: 40
  }
});
