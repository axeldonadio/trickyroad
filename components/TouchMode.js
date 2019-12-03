import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, ImageBackground, Text, View, Image, PanResponder } from 'react-native';
import LeaveButton from './LeaveButton'

export default class TouchMode extends Component {
  constructor(){
    super();
    this.state = {
      left: 0,
      top: 0
    }
  }

  _panResponder = PanResponder.create({
    // Ask to be the responder:
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      // The gesture has started. Show visual feedback so the user knows
      // what is happening!
      // gestureState.d{x,y} will be set to zero now
    },
    onPanResponderMove: (evt, gestureState) => {
      // The most recent move distance is gestureState.move{X,Y}
      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}
      this.setState({
        left: gestureState.dx,
        top: gestureState.dy,
      });
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: (evt, gestureState) => {
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
    },
    onPanResponderTerminate: (evt, gestureState) => {
      // Another component has become the responder, so this gesture
      // should be cancelled
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      return true;
    },
  });
  
  render() {
    return (
      <SafeAreaView style={touch.container}>
        <ImageBackground source={require('../assets/background.jpg')} style={touch.background}>
          <View style={touch.infos}>
            <View style={touch.timer}>
              <Text style={touch.timerValue}>
                00:00
              </Text>
            </View>
            <View style={touch.selectedMode}>
              <Image 
                resizeMode={'contain'}
                style={touch.img}
                source={require('../assets/icons/touchscreen.png')}
              />
            </View>
          </View>
          <View style={touch.visuContainer} {...this._panResponder.panHandlers}>
            <Image style={touch.imgTMP} resizeMode={'contain'}
              source={require('../assets/tmp.png')}
            />
          </View>
          <View style={touch.leaveContainer}>
            <LeaveButton></LeaveButton>
          </View>
          <View style={touch.debug}>
            <Text style= {{ fontSize: 20, color: 'white'}}>
            Position du doigt :
            x : { round(this.state.left) } y : { round(this.state.top) }
            </Text>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const touch = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%', 
    height: '100%'
  },
  infos: {
    position: 'relative',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#ff0000',
  },
  timer: {
    position: 'absolute',
    top: 50, 
    left: 0,
    right:0,
    alignItems: 'center',
  },
  timerValue: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  selectedMode: {
    position: 'absolute',
    top: 30, 
    right: 30,
  },
  img: {
    width: 30,
    height: 30,
  },
  imgTMP: {
    width: '90%',
    height: 300,
  },
  visuContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  leaveContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  debug: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },

});
