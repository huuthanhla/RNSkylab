/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Date, StyleSheet, Text, View} from 'react-native';
import Moment from 'react-moment';

class TimerView extends Component {
  constructor(props) {
    super(props)
    console.log('Constructor')
  }

  // Mounting
  componentWillMount() {
    console.log('componentWillMount')
  }

  render() {
    console.log('render')

    return (
      <View>
        <Text> {this.props.currentTime} </Text>
      </View>
    )
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  // Updating
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps nextProps: ', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate with nextProps, nextState', nextProps, nextState)
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate with nextProps, nextState', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate with prevProps, prevState', prevProps, prevState)
  }

  // Unmount
  componentWillUnmount() {
    console.log('ComponentWillUnmount')
  }
}

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isRemoved: false,
      currentTime: 123456789
    }

    // setTimeInterval( () => {
    //   this.setState({
    //     currentTime: this.state.currentTime + 1
    //   })
    // }, 1000)

  }

  onToogleShowing = () => {
    this.setState({
      isRemoved: !this.state.isRemoved
    })
  }

  render() {

    const timerView = (!this.state.isRemoved) ? <TimerView currentTime={this.state.currentTime} /> : null
    const btnTitle = (!this.state.isRemoved) ? 'Remove' : 'Show'

    return (
      <View style={styles.container}>
        {timerView}
        <Button onPress={this.onToogleShowing} title={btnTitle} />        
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
  }
});
