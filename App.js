/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Person extends Component {
  render() {
    return(
      <View>
        <Text>Name: {this.props.name}, liked: {this.props.liked}</Text>
      </View>
    )
  }
}

Person.defaultProps = {
  name: "Someone"
}

Person.propTypes = {
  name: PropTypes.string,
  liked: PropTypes.number
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Person name={15} liked={30}></Person>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
