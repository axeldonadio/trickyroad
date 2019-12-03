import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export default class MainButton extends Component {

  state = { };

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate(this.props.destination)}>
        <View style = {Button.container}>
          <Text style = {Button.title}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const Button = StyleSheet.create({
  container: {
    backgroundColor: '#C9C9C9', 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 15,
    paddingHorizontal: 60,
    paddingVertical: 10
  },
  title: {
    color: '#954F43',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
