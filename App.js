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

import {
  createStore, 
  combineReducers,
  applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

// State
let appState = {
  data : [
    { title: 'Go to the office', isFinished: true },
    { title: 'Prepare tasks for today', isFinished: false },
    { title: 'Team meeting', isFinished: false },
    { title: 'Commit tasks changed', isFinished: false },
  ]
}

// Action

// Reducer

const taskListReducer = (state = appState, action) => {
  let newTaskList = state.data
  switch(action.type) {
    case 'ADD':
      const newTask = { title: action.taskName, isFinished: false }
      return {...state, data: [...state.data, newTask]}
    case 'FINISH':
      let isFinished = newTaskList[action.atIndex].isFinished
      newTaskList[action.atIndex].isFinished = !isFinished
      return {...state, data: newTaskList}
    case 'DELETE':
    newTaskList = newTaskList.filter((item, i) => i !== action.atIndex)
    return {...state, data: newTaskList}
  }
  return state
}

// Middleware


// Store
const store = createStore(taskListReducer)


// Test

import AddView from './components/AddView';
import Counter from './components/Counter';
import TaskFlatList from './components/TaskFlatList';

export default class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data : [
        { title: 'Go to the office', isFinished: true },
        { title: 'Prepare tasks for today', isFinished: false },
        { title: 'Team meeting', isFinished: false },
        { title: 'Commit tasks changed', isFinished: false },
      ]
    }
  }

  onAddNewTask = (taskName) => {
    const newTask = { title: taskName, isFinished: false }
    const newTaskList = [ ...this.state.data, newTask ]

    this.setState({ data: newTaskList });
  }

  // onFinishedItem = (index) => {
  //   let newTaskList = this.state.data;
  //   newTaskList[index].isFinished = true; 
  //   this.setState({ data: newTaskList });
  // }

  // onDeleteItem = (index) => {
  //   let newTaskList = this.state.data.filter( (item, i) => i != index );
  //   this.setState({ data: newTaskList });
  // }

  render() {
    return (
      <Provider store={store}>
        <View style={ styles.container }>
          <AddView onAddNewTask={ this.onAddNewTask } />
          <Counter />
          <TaskFlatList />
        </View>    
      </Provider>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1F5FE'
  }
});
