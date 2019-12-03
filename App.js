import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image, SafeAreaView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainButton from './components/MainButton'
import LadderButton from './components/LadderButton'
import ModeSelector from './components/ModeSelector'
import GyroscopeMode from './components/GyroscopeMode'
import TouchMode from './components/TouchMode'

class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./assets/background.jpg')} style={styles.background}>
          <View style={styles.main}>
            <Text style={styles.appTitle}>{'Tricky Road'.toUpperCase()}</Text>
            <Image style={styles.img} resizeMode={'contain'}
              source={require('./assets/tmp.png')}
            />
          </View>
          <View style={styles.nav}>
            <View style={styles.containerPlayButton}>
              <MainButton style={styles.playButton} title='Play' navigation={this.props.navigation} destination='ModeSelector'></MainButton>
            </View>
            <View style={styles.containerLadderButton}>
              <LadderButton style={styles.ladderButton}></LadderButton>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    ModeSelector: { screen: ModeSelector },
    GyroscopeMode: { screen: GyroscopeMode },
    TouchMode: { screen: TouchMode },
  },
  {
    initialRouteName: 'ModeSelector',
    headerMode: 'none' 
  }
)
export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: '100%', 
    height: '100%'
  },
  main: {
    width: '100%',
    flex: 7,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  nav: {
    width: '100%',
    flex: 3,
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  img: {
    width: '90%',
    height: 300,
  },
  containerLadderButton: {
    width: '100%',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  }
});

