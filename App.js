/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text,
  View
} from 'react-native';

import {createStore} from 'redux'

// State
let appState = { number: 1, histories: [1] }

// Action
const add = {
  type: 'ADD',
  value: 1
}

const sub = {
  type: 'SUB',
  value: 1
}

// Reducer
const numberReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      // Mutable state
      // state.number += action.value

      const addValue = state.number + action.value
      // Immutable state
      state = {
        ...state,
        histories: [...state.histories, addValue],
        number: addValue
      }
      break

    case 'SUB':
      // Immutable state
      const subValue = state.number - action.value
      state = {
        ...state,
        histories: [...state.histories, subValue],
        number: subValue
      }
      break
  }

  return state
}

// Store
const store = createStore(numberReducer, appState)

// Test
store.subscribe( () => {
  console.log('State updated', store.getState())
})
store.dispatch(add)
store.dispatch(add)
store.dispatch(add)
store.dispatch(sub)

store.dispatch({
  type: 'ADD',
  value: 5
})

const createAddAction = (number) => {
  return {type: 'ADD', value: number}
}

store.dispatch( createAddAction(100) )

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
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
