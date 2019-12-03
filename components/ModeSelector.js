import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Image, SafeAreaView, ImageBackground } from 'react-native';

export default class ModeSelector extends Component {

  render() {
    return (
      <SafeAreaView style={selector.container}>
        <ImageBackground source={require('../assets/background.jpg')} style={selector.background}>
          <TouchableOpacity style={selector.containerTouch} onPress={() => this.props.navigation.navigate('TouchMode') }>
            <Image resizeMode={'contain'}
              style={selector.img}
              source={require('../assets/icons/touchscreen.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={selector.containerGyroscope}  onPress={() => this.props.navigation.navigate('GyroscopeMode') }>
            <Image resizeMode={'contain'}
              style={selector.img}
              source={require('../assets/icons/gyroscope.png')}
            />
          </TouchableOpacity>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  onPress() {
    alert('Simple Button pressed')
  }
}

const selector = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%', 
    height: '100%'
  },
  img: {
    width: 50, 
  },
  containerGyroscope: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  containerTouch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }
});
